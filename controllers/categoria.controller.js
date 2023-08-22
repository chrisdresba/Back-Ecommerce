const { response, request } = require("express");
const Categoria = require("../models/categoria");

const getCategorias = async (req, res = respone) => {
  const { limit = 30, from = 0 } = req.query;
  const query = { state: true };
  try {
    const [categorias] = await Promise.all([
      Categoria.find(query).skip(Number(from)).limit(Number(limit)),
    ]);

    return res.json(categorias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

const getCategoria = async (req, res = response) => {
  const { id } = req.params;
  const query = { id: id };

  try {
    const categoria = await Categoria.find(query);
    return res.json(categoria);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  getCategorias,
  getCategoria,
};
