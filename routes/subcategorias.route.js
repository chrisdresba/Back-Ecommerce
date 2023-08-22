const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getSubcategorias,
  getSubcategoria,
} = require("../controllers/subcategoria.controller");
const { subcategoryExistsById } = require("../helpers/db-validators");

const router = Router();

router.get("/", getSubcategorias);

router.get(
  "/:id",
  [check("id").custom(subcategoryExistsById), validateFields],
  getSubcategoria
);

module.exports = router;
