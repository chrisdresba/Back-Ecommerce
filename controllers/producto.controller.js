const { respone } = require("express");
const Producto = require("../models/producto");
const { body } = require("express-validator");
const Subcategoria = require("../models/subcategoria");

const getProductos = async (req, res = response) => {
  const { from = 0 } = req.query;
  try {
    const [productos] = await Promise.all([Producto.find().skip(Number(from))]);

    return res.json(productos);
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

    return res.json(producto);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error, contactar al administrador" });
  }
};

const getProductosBySubcategoria = async (req, res = response) => {
  try {
    const { nombre } = req.params;

    // Busca la subcategoría por nombre
    const subcategoria = await Subcategoria.findOne({
      nombre: { $regex: new RegExp("^" + nombre + "$", "i") },
    });

    if (!subcategoria) {
      return res.status(404).json({ mensaje: "Subcategoría no encontrada" });
    }

    // Encuentra los productos de la subcategoría utilizando el id_subcategoria
    const productos = await Producto.find({ id_subcategoria: subcategoria.id });

    return res.json(productos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: "Error del servidor" });
  }
};

module.exports = {
  getProductos,
  getProducto,
  getProductosBySubcategoria,
};
