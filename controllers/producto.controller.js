const { respone } = require("express");
const Producto = require("../models/producto");
const { body } = require("express-validator");

const getProductos = async (req, res = response) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { state: true };

  const [total, productos] = await Promise.all([
    Producto.countDocuments(),
    Producto.find().skip(Number(from)),
  ]);

  res.json(productos);
};

const getProducto = async (req, res = response) => {
  const { id } = req.params;
  const query = { id_producto: id };

  const producto = await Producto.find(query);

  res.json(producto);
};

module.exports = {
  getProductos,
  getProducto,
};
