const { response, request } = require("express");
const Subcategoria = require("../models/subcategoria");

const getSubcategorias = async (req, res = respone) => {
  const { limit = 30, from = 0 } = req.query;
  const query = { state: true };
  try {
    const [subcategorias] = await Promise.all([
      Subcategoria.find(query).skip(Number(from)).limit(Number(limit)),
    ]);

    return res.json(subcategorias);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

const getSubcategoria = async (req, res = response) => {
  const { id } = req.params;
  const query = { id: id };
  try {
    const subcategoria = await Subcategoria.findOne(query);

    return res.json(subcategoria);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  getSubcategorias,
  getSubcategoria,
};
