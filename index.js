const express = require('express')
const app = express()

const sum = require('./src/sum')

app.get('/', (req, res) => {
  res.send('Hello world! Sum total: ' + sum(2, 5))
})

app.listen(3000, (req, res) => {
  console.log('Server started on port 3000')
})
