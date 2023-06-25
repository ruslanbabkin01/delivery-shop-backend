import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
require('dotenv').config()

const { DB_HOST } = process.env

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_HOST)
    console.log(
      `Database is connected: ${db.connection.name}, on port: ${db.connection.port}, on host: ${db.connection.host}`
    )
  } catch (error) {
    console.log(error.message)
  }
}
