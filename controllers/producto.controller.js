const { respone } = require("express");
const Producto = require("../models/producto");
const { body } = require("express-validator");

const getProductos = async (req, res = response) => {
  const { from = 0 } = req.query;
  try {
    const [productos] = await Promise.all([
      Producto.countDocuments(),
      Producto.find().skip(Number(from)),
    ]);

    res.json(productos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

const getProducto = async (req, res = response) => {
  const { id } = req.params;
  const query = { id_producto: id };

  try {
    const producto = await Producto.find(query);

    res.json(producto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

module.exports = {
  getProductos,
  getProducto,
};
