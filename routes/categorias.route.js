const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getCategorias,
  getCategoria,
} = require("../controllers/categoria.controller");
const { categoryExistsById } = require("../helpers/db-validators");

const router = Router();

router.get("/", getCategorias);

router.get(
  "/:id",

  getCategoria
);

module.exports = router;
