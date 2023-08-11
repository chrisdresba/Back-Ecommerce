const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");

const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req, res = response) => {
  const { email, contraseña } = req.body;

  try {
    const user = await Usuario.findOne({ email });
    //check exist user
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Usuario / contraseña no son correctos" });
    }
    //check state
    if (!user.state) {
      return res.status(400).json({ msg: "Usuario inactivo" });
    }

    const validPassword = bcrypt.compareSync(contraseña, user.contraseña);
    if (!validPassword) {
      return res
        .status(400)
        .json({ msg: "Usuario / contraseña no son correctos" });
    }

    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  login,
};
