import { app } from './server'
import { connectDb } from './config/db'
require('dotenv').config()

const PORT = process.env.PORT || 3333

try {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
} catch (error) {
  console.log(`Server not running. Error message: ${error.message}`)
  process.exit(1)
}

connectDb()
