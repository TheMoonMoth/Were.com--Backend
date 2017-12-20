const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const wolfData = require('./data/wolves.js')

const sightings = [
  {
    wolfId: 1,
    locations: [ //park hill
      "Aurora",
      "Park Hill",
      "Cherry Creek"
    ]
  },{
    wolfId: 2,
    locations: [ //citypark
      "Capitol Hill",
      "City Park",
      "RiNo"
    ]
  },{
    wolfId: 3,
    locations: [ //chatfield
      "Chatfield",
      "Littleton",
      "Baker"
    ]
  },{
    wolfId: 4,
    locations: [ //cap hill
      "Wash Park",
      "Five Points",
      "Pearl Street"
    ]
  }
]

var userSightings = []

function fileWolf(req){
  switch (req.body){
    case "Black":
      req.body.location
      break
    case "Brown":
      return
      break
    case "Silver":
      return
      break
    case "Gray with Yellow Stripe":
      return
      break
    default:
      return "This werewolf has never been seen before. WARNING! Stay away."
      break
  }
}

const app = express()
app.use(cors())
app.use(bodyParser())

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
  // resp.json({message: "Thanks for the update!"})
})

app.get('/userSighting', function(req, resp){
  resp.json(userSightings)
})

app.listen(process.env.PORT || 3000)
