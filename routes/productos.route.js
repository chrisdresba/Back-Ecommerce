const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getProductos,
  getProducto,
} = require("../controllers/producto.controller");
const { productExistsById } = require("../helpers/db-validators");

const router = Router();

router.get("/", getProductos);

router.get(
  "/:id",
  [check("id").custom(productExistsById), validateFields],
  getProducto
);

module.exports = router;
