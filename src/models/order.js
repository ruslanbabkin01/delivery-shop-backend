const { Schema, model } = require('mongoose')
const Joi = require('joi')
const { productJoiSchema } = require('./product')

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

const schema = new Schema(
  {
    userName: {
      type: String,
      required: [true, 'Name is required'],
      minlenght: 3,
    },
    userEmail: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegex,
    },
    userPhone: {
      type: String,
      required: [true, 'Phone is required'],
      match: phoneRegex,
    },
    userAddress: {
      type: String,
      required: [true, 'Address is required'],
    },
    shop: { type: Schema.Types.ObjectId, ref: 'shop', required: true },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'product',
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
    },
  },
  { versionKey: false, timestamps: true }
)

const addOrderJoiSchema = Joi.object({
  userName: Joi.string().alphanum().required(),
  userEmail: Joi.string().email().required(),
  userPhone: Joi.string().regex(phoneRegex).required(),
  userAddress: Joi.string().required(),
  totalPrice: Joi.number().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: productJoiSchema,
        quantity: Joi.number().required(),
      })
    )
    .required(),
})

const OrderModel = model('order', schema)

module.exports = { OrderModel, addOrderJoiSchema }
