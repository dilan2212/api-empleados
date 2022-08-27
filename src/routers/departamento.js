const { Router } = require("express");

const {
  getDepartamentos,
  saveDepartamento,
  updateDepartamento,
  deleteDepartamento,
} = require("../controllers/departamento");

const router = Router();

router.get("/", getDepartamentos);
router.post("/", saveDepartamento);
router.put("/:codigo", updateDepartamento);
router.delete("/:codigo", deleteDepartamento);

module.exports = router;
