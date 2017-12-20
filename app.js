const express = require('express')
const cors = require('cors')

const wolfData = require('./data/wolves.js')
const neighborhoodData = require('./data/locations.js')

const app = express()
app.use(cors())

app.get('/wolves', function(req, resp){
  resp.json(wolfData)
})


app.listen(3000)
