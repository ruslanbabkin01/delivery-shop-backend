import { Schema, model } from 'mongoose'
import Joi from 'joi'

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlenght: 3,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegex,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      match: phoneRegex,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
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
        owner: { type: Schema.Types.ObjectId, ref: 'shop', required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
)

export const addOrderJoiSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneRegex).required(),
  address: Joi.string().required(),
  totalPrice: Joi.number().required(),
  shop: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().required(),
        owner: Joi.string().required(),
      })
    )
    .required(),
})

export const OrderModel = model('order', schema)
