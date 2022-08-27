const { Router } = require("express");

const {
  getEmpleados,
  saveEmpleado,
  updateEmpleado,
  deleteEmpleado,
} = require("../controllers/empleado");

const router = Router();

router.get("/", getEmpleados);
router.post("/", saveEmpleado);
router.put("/:codigo", updateEmpleado);
router.delete("/:codigo", deleteEmpleado);

module.exports = router;
