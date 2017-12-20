const express = require('express')
const cors = require('cors')

const wolfData = require('./data/wolves.js')
const sightings = require('./data/locations.js')

const app = express()
app.use(cors())

app.get('/', function(req, resp){
  resp.json("Welcome to Were.com")
  resp.json("Don't get caught unaWere!")
})

app.get('/wolves', function(req, resp){
  resp.json(wolfData)
})

app.get('/sightings', function(req, resp){
  resp.json(sightings)
})

app.listen(process.env.PORT || 3000)
