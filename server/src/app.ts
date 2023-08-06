import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import bodyParser from 'body-parser'
const username = encodeURIComponent('YifanZou')
const password = encodeURIComponent('ZYFzyf1352109513266')

const app: Express = express()

const PORT: string | number = 4000
// const PORT: string | number = process.env.PORT || 4000;

console.log(process.env.PORT)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(todoRoutes)

const uri: string = `mongodb+srv://${username}:${password}@cluster0.xptzrma.mongodb.net/?retryWrites=true&w=majority`
// 这段 url 来自mongoDB cloud

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  })
  .catch((error) => {
    throw error
  })
