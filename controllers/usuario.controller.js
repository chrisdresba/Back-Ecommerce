const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const getUsuario = async (req = request, res = response) => {
  const { from = 0 } = req.query;
  const query = { state: true };
  try {
    const [total, users] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query).skip(Number(from)),
    ]);

    res.json({
      total,
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

const postUsuario = async (req = request, res = response) => {
  try {
    const { nombre, apellido, dni, telefono, email, contraseña } = req.body;
    const usuario = new Usuario({
      nombre,
      apellido,
      dni,
      telefono,
      email,
      contraseña,
    });

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

    await usuario.save();

    res.json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  getUsuario,
  postUsuario,
};
