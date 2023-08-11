const Categoria = require("../models/categoria");
const Producto = require("../models/producto");
const Usuario = require("../models/usuario");

const isValidRole = async (role = "") => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`El rol ${role} no esta registrado en la BD`);
  }
};

const existEmail = async (email = "") => {
  const exist = await Usuario.findOne({ email });
  if (exist) {
    throw new Error(`Email already exists`);
  }
};

const userExistsById = async (id) => {
  const exist = await Usuario.findOne({ _id: id });
  if (exist) {
    throw new Error(`El id no existe ${id}`);
  }
};

const categoryExistsById = async (id) => {
  const exist = await Categoria.findOne({ _id: id });
  if (!exist) {
    throw new Error(`El id no existe ${id}`);
  }
};

const productExistsById = async (id) => {
  const exist = await Producto.findOne({ _id: id });
  if (!exist) {
    throw new Error(`El id no existe ${id}`);
  }
};

const validCollections = (c = "", collections = []) => {
  const include = collections.includes(c);
  if (!include) {
    throw new Error(`La colección ${c} no es permitida, ${collections}`);
  }
  return true;
};

module.exports = {
  isValidRole,
  existEmail,
  userExistsById,
  categoryExistsById,
  productExistsById,
  validCollections,
};
