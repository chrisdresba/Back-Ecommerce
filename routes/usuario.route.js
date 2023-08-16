const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsuario,
  postUsuario,
} = require("../controllers/usuario.controller");

const { validateFields } = require("../middlewares/validate-fields");

const { existEmail, userExistsById } = require("../helpers/db-validators");

const router = Router();

router.get("/:id", [
  check("id", "No es un ID válido").isMongoId(),
  check("id").custom(userExistsById),
  validateFields,
]);

module.exports = router;
