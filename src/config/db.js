const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const { DB_STRING } = process.env

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_STRING)
    console.log(
      `Database is connected: ${db.connection.name}, on port: ${db.connection.port}, on host: ${db.connection.host}`
        .bold.green.italic
    )
  } catch (error) {
    console.log(error.message.bold.red)
  }
}

module.exports = connectDb
