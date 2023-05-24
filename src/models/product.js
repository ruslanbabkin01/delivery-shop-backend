const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    },
    photoUrl: {
      type: String,
      default: '',
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
)

const ProductModel = mongoose.model('product', schema)

module.exports = ProductModel
