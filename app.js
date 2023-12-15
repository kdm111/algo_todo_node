
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const Redis = require('ioredis')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const REDIS_URL = process.env.REDIS_URL | 'localhost'
const redisClient = new Redis({
  host: REDIS_URL,
  port: 6379,
  enableReadyCheck: true
})

const app = express()
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.get('/na', async (req, res) => {
  const response = await redisClient.get('name')
  res.send(response)
})

app.listen(PORT, () => {
  console.log(`on ${PORT} listening`)
})