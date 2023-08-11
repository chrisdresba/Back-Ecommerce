const { response, request } = require("express");
const Subcategoria = require("../models/subcategoria");

const getSubcategorias = async (req, res = respone) => {
  const { limit = 30, from = 0 } = req.query;
  const query = { state: true };

  const [total, subcategorias] = await Promise.all([
    Subcategoria.countDocuments(),
    Subcategoria.find().skip(Number(from)).limit(Number(limit)),
  ]);

  res.json(subcategorias);
};

const getSubcategoria = async (req, res = response) => {
  const { id } = req.params;
  const query = { _id: id };

  const categoria = await Subcategoria.find(query);

  res.json(categoria);
};

module.exports = {
  getSubcategorias,
  getSubcategoria,
};
