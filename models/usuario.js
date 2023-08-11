const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  apellido: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  dni: {
    type: Number,
    required: [true, "El DNI es obligatorio"],
  },
  telefono: {
    type: String,
    required: [true, "El teléfono es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  contraseña: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  state: {
    type: Boolean,
    default: true,
  },
});

usuarioSchema.methods.toJSON = function () {
  const { _id, password, ...user } = this.toObject();
  user.id = _id;
  return user;
};

module.exports = model("Usuario", usuarioSchema);
