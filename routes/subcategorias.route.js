const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getSubcategorias,
  getSubcategoria,
} = require("../controllers/subcategoria.controller");

const router = Router();

router.get("/", getSubcategorias);

router.get(
  "/:id",
  [check("id", "No es un ID válido").isMongoId(), validateFields],
  getSubcategoria
);

module.exports = router;
