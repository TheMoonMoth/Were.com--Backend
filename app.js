const express = require('express')
const cors = require('cors')

const wolfData = require('./data/wolves.js')
const sightings = require('./data/locations.js')

var userSightings = []

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

app.post('/userSighting', function(req, resp){
  console.log(req.body)
  let incoming = req.body
  userSightings.push(incoming)
  res.json({message: "Thanks for the update!"})
})

app.get('/userSighting', function(req, resp){
  resp.json(userSightings)
})

app.listen(process.env.PORT || 3000)
