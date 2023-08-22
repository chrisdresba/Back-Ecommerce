const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
  id: {
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

CategoriaSchema.methods.toJSON = function () {
  const { __v, state, ...data } = this.toObject();
  return data;
};

module.exports = model("Categoria", CategoriaSchema);
