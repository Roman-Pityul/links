const express = require('express')
const config = require('config')
const router = require('./routes/index')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const PORT = config.get('port') || 5000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `${req.headers.origin}`)
  res.header("Access-Control-Allow-Methods", "*")
  res.header('Access-Control-Allow-Headers', 'origin, content-type, accept, authorization')
  next()
});

app.use(express.json({ extended: true }))
app.use('/api', router)
app.use(cors())

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => console.log(`Server has been starnet at ${PORT} port`))
  } catch (e) {
    console.log('Server error!!!', e.message)
    process.exit(1)
  }
}

start()