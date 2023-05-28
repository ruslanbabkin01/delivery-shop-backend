const { Schema, model } = require('mongoose')
const Joi = require('joi')

const schema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    },
    photoUrl: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
)

const ProductModel = model('product', schema)

const productJoiSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  owner: Joi.string().required(),
  photoUrl: Joi.string().uri(),
})

module.exports = { ProductModel }
