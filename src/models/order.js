const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
  },
  { versionKey: false, timestamps: true }
)

const OrderModel = mongoose.model('order', schema)

module.exports = OrderModel
