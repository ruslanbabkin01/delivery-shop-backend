const mongoose = require('mongoose')

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlenght: 6,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: emailRegex,
    },
    phone: {
      type: String,
      unique: true,
      match: phoneRegex,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
  },
  { versionKey: false, timestamps: true }
)

const UserModel = mongoose.model('user', schema)

module.exports = UserModel
