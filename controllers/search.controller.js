const { request, response } = require("express");
const { isValidObjectId } = require("mongoose");
const Producto = require("../models/producto");

const search = async (req = request, res = response) => {
  const { termino } = req.params;
  try {
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

    return res.json(productos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  search,
};
