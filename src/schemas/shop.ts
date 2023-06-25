import { Schema, model } from 'mongoose';

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

export const ShopModel = model('shop', schema)
