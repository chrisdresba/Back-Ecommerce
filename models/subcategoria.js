const { Schema, model } = require("mongoose");

const SubcategoriaSchema = Schema({
  id: {
    type: Number,
    required: [true, "El id es obligatorio"],
  },
  id_agrupador: {
    type: Number,
    required: [true, "El id es obligatorio"],
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
});

SubcategoriaSchema.methods.toJSON = function () {
  const { __v, state, ...data } = this.toObject();
  return data;
};

module.exports = model("Subcategoria", SubcategoriaSchema);
