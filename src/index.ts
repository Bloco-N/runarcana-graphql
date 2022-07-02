import * as dontenv from 'dotenv'
import { app } from './app'
dontenv.config()
const { PORT } = process.env

app(PORT)
