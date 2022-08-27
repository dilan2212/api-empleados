const { realizarConexion } = require("../database/conexion");

const pool = realizarConexion();

const getEmpleados = async (req, res) => {
  try {
    const data = await pool.query("select * from empleado");
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

const saveEmpleado = async (req, res) => {
  try {
    const { codigo, nit, nombre, apellido1, apellido2, codigoDepartamento } =
      req.body;
    if (codigo != null) {
      const empleado = await pool.query(
        `select * from empleado where codigo=$1`,
        [codigo]
      );
     console.log("empleadoo"+empleado.rowCount);
      if (empleado.rows.length >= 1) {
        res.status(202).json({
          ok: false,
          msg: "el codigo ya existe",
        });
      } else {
        const departamento = await pool.query(
          `select * from departamento where codigo=$1`,
          [codigoDepartamento]
        );
        if (departamento.rows.length >= 1) {
          await pool.query(
            `INSERT INTO public.empleado(
         codigo, nit, nombre, apellido1, apellido2, codigo_departamento)
         VALUES ($1, $2, $3, $4, $5, $6);`,
            [codigo, nit, nombre, apellido1, apellido2, codigoDepartamento]
          );

          res.status(201).json({
            ok: true,
            msg: "Empleado creado",
          });
        } else {
          res.status(202).json({
            ok: false,
            msg: "el departamento con el codigo" + codigoDepartamento + " no existe",
          });
        }
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

const updateEmpleado = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { nit, nombre, apellido1, apellido2, codigoDepartamento } = req.body;
    const data = await pool.query(
      `UPDATE public.empleado
       SET nit=$1, nombre=$2, apellido1=$3, apellido2=$4, codigo_departamento=$5
       WHERE codigo=$6;`,
      [nit, nombre, apellido1, apellido2, codigoDepartamento, codigo]
    );
    if (data.rowCount != 0) {
      res.status(200).json({
        ok: true,
        msg: "Empleado actualizado",
      });
    } else {
      res.status(202).json({
        ok: false,
        msg: "Asegurese de que el empleado existe",
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

const deleteEmpleado = async (req, res) => {
  try {
    const { codigo } = req.params;
    const data = await pool.query("delete from empleado where codigo=$1", [
      codigo,
    ]);

    if (data.rowCount != 0) {
      res.status(200).json({
        ok: true,
        msg: "Empleado eliminado",
      });
    } else {
      res.status(202).json({
        ok: false,
        msg: "Asegurese de que el empleado existe",
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
  getEmpleados,
  saveEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
