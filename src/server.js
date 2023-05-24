require('colors')
require('dotenv').config()
const app = require('./app')

const connectDb = require('./config/db')

const defaultPort = 3333
const port = process.env.PORT || defaultPort

try {
  app.listen(port, () => {
    console.log(
      `Server running. Use our API on port: ${port}`.green.bold.italic
    )
  })
} catch (error) {
  console.log(error.message.bold.red)
  process.exit(1)
}
connectDb()
