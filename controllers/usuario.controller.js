const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const getUsuario = async (req = request, res = response) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { state: true };

  const [total, users] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    total,
    users,
  });
};

const postUsuario = async (req = request, res = response) => {
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
};

module.exports = {
  getUsuario,
  postUsuario,
};
