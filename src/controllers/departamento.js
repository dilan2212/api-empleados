const { realizarConexion } = require("../database/conexion");

const pool = realizarConexion();

const getDepartamentos = async (req, res) => {
  try {
    const data = await pool.query("select * from departamento");
    res.status(200).json({
      ok: true,
      msg: "success",
      data: data.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "consulte con el administrado",
    });
  }
};

const saveDepartamento = async (req, res) => {
  try {
    const { codigo, nombre, presupuesto } = req.body;

    if (codigo != null) {
      const departamento = await pool.query(
        `select * from departamento where codigo=$1`,
        [codigo]
      );

      if (departamento.rows.length >= 1) {
        res.status(202).json({
          ok: false,
          msg: "el codigo ya existe",
        });
      } else {
        await pool.query(
          `INSERT INTO public.departamento(
           codigo, nombre, presupuesto)
           VALUES ($1, $2, $3);`,
          [codigo, nombre, presupuesto]
        );

        res.status(201).json({
          ok: true,
          msg: "departamento creado",
        });
      }
    } else {
      res.status(202).json({
        ok: false,
        msg: "el codigo es obligatorio",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "consulte con el administrado",
    });
  }
};

const updateDepartamento = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { nombre, presupuesto } = req.body;
    const data = await pool.query(
      `UPDATE public.departamento
	     SET nombre=$1, presupuesto=$2
	     WHERE codigo=$3;`,
      [nombre, presupuesto, codigo]
    );
    if (data.rowCount != 0) {
      res.status(200).json({
        ok: true,
        msg: "departamento actualizado",
      });
    } else {
      res.status(202).json({
        ok: false,
        msg: "Asegurese de que el departamento existe",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "consulte con el administrado",
    });
  }
};

const deleteDepartamento = async (req, res) => {
  try {
    const { codigo } = req.params;
    const data = await pool.query("delete from departamento where codigo=$1", [
      codigo,
    ]);

    if (data.rowCount != 0) {
      res.status(200).json({
        ok: true,
        msg: "departamento eliminado",
      });
    } else {
      res.status(202).json({
        ok: false,
        msg: "Asegurese de que el departamento existe",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "consulte con el administrado",
    });
  }
};

module.exports = {
  getDepartamentos,
  saveDepartamento,
  updateDepartamento,
  deleteDepartamento,
};
