const { request, response } = require("express");
const { isValidObjectId } = require("mongoose");
const Producto = require("../models/producto");

const search = async (req = request, res = response) => {
  const { termino } = req.params;

  const isMongoId = isValidObjectId(termino);

  if (isMongoId) {
    const product = await Producto.findById(termino);
    return res.json({
      results: product ? [product] : [],
    });
  }

  const regex = new RegExp(termino, "i");

  const productos = await Producto.find({
    nombre: regex,
  });

  res.json(productos);
};

module.exports = {
  search,
};
