const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth.controller");
const { validateFields } = require("../middlewares/validate-fields");
const { postUsuario } = require("../controllers/usuario.controller");
const { existEmail } = require("../helpers/db-validators");

const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("contraseña", "La contraseña es obligatoria").not().isEmpty(),
    validateFields,
  ],
  login
);

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
