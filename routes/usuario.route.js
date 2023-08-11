const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsuario,
  postUsuario,
} = require("../controllers/usuario.controller");

const { validateFields } = require("../middlewares/validate-fields");

const { existEmail, userExistsById } = require("../helpers/db-validators");

const router = Router();

router.get("/", getUsuario);

router.get("/:id", [
  check("id", "No es un ID válido").isMongoId(),
  check("id").custom(userExistsById),
  validateFields,
]);

router.post(
  "/",
  [
    check("email", "El correo no es valido").isEmail(),
    check("email").custom(existEmail),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("contraseña", "El password debe de ser mas de 6 letras").isLength({
      min: 6,
    }),
    validateFields,
  ],
  postUsuario
);

module.exports = router;
