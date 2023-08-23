const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  getProductos,
  getProducto,
  getProductosBySubcategoria,
} = require("../controllers/producto.controller");
const {
  productExistsById,
  subcategoryExistsByName,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", getProductos);

router.get(
  "/:id",
  [check("id").custom(productExistsById), validateFields],
  getProducto
);

router.get(
  "/subcategorias/:nombre/",
  [check("nombre").custom(subcategoryExistsByName), validateFields],
  getProductosBySubcategoria
);

module.exports = router;
