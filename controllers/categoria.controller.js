const { response, request } = require("express");
const Categoria = require("../models/categoria");

const getCategorias = async (req, res = respone) => {
  const { limit = 30, from = 0 } = req.query;
  const query = { state: true };

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments(),
    Categoria.find().skip(Number(from)).limit(Number(limit)),
  ]);

  res.json(categorias);
};

const getCategoria = async (req, res = response) => {
  const { id } = req.params;
  const query = { _id: id };

  const categoria = await Categoria.find(query);

  res.json(categoria);
};

module.exports = {
  getCategorias,
  getCategoria,
};
