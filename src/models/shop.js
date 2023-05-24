const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ShopModel = mongoose.model('shop', schema)

module.exports = ShopModel

// products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
