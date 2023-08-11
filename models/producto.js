const { Schema, model } = require("mongoose");

const imagenSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  id_producto_imagen: {
    type: Number,
    required: true,
  },
  orden: {
    type: Number,
    required: true,
  },
});

const ProductoSchema = Schema({
  destacado: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  id_producto: {
    type: Number,
    required: true,
    unique: true,
  },
  id_subcategoria: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  vendible: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  garantia: {
    type: Number,
    required: true,
  },
  iva: {
    type: Number,
    required: true,
  },
  imagenes: [imagenSchema], // Un subdocumento para las imágenes
});

ProductoSchema.methods.toJSON = function () {
  const { __v, state, ...data } = this.toObject();
  return data;
};

module.exports = model("Producto", ProductoSchema);
