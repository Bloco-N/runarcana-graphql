import * as dontenv from 'dotenv'

dontenv.config()

export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '8h'
  }
}
