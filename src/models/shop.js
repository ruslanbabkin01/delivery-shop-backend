const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product', default: [] }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const ShopModel = model('shop', schema)

module.exports = ShopModel

// products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
