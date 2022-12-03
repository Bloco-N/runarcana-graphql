import { app }      from './app'
import * as dontenv from 'dotenv'

dontenv.config()
const { PORT } = process.env

app(Number(PORT))
