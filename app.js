const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const wolfData = require("./data/wolves.js");

const sightings = [
  {
    wolfId: 1,
    locations: [
      //park hill
      "Aurora",
      "Park Hill",
      "Cherry Creek"
    ]
  },
  {
    wolfId: 2,
    locations: [
      //citypark
      "Capitol Hill",
      "City Park",
      "RiNo"
    ]
  },
  {
    wolfId: 3,
    locations: [
      //chatfield
      "Chatfield",
      "Littleton",
      "Baker"
    ]
  },
  {
    wolfId: 4,
    locations: [
      //cap hill
      "Wash Park",
      "Five Points",
      "Pearl Street"
    ]
  }
];

var userSightings = [];

function fileWolf(obj) {
  switch (obj.color) {
    case "Black":
      sightings[2].locations.unshift(obj.location);
      break;
    case "Brown":
      sightings[1].locations.unshift(obj.location);
      break;
    case "Silver":
      sightings[0].locations.unshift(obj.location);
      break;
    case "Gray with Yellow Stripe":
      sightings[3].locations.unshift(obj.location);
      break;
    default:
      return "This werewolf has never been seen before. WARNING! Stay away.";
      break;
  }
}

const currentMoonAPI = "http://api.usno.navy.mil/rstt/oneday?date=today&loc=Denver, CO";
const moonCalendarAPI = "http://api.usno.navy.mil/moon/phase?date=today&nump=4";
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser());

app.get("/", function(req, resp) {
  resp.json("Welcome to Were.com");
  resp.json("Don't get caught unaWere!");
});

app.get("/wolves", function(req, resp) {
  resp.json(wolfData);
});

app.get("/sightings", function(req, resp) {
  resp.json(sightings);
});

app.get("/current-moon", function(req, res) {
  fetch(currentMoonAPI)
    .then(res => res.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
});

app.get("/moon-calendar", function(req, res) {
  fetch(moonCalendarAPI)
    .then(res => res.json())
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error.message)
    })
});

app.post("/userSighting", function(req, resp) {
  let incoming = req.body;
  userSightings.push(incoming);
  fileWolf(incoming);
  resp.json(userSightings);
  // resp.json({message: "Thanks for the update!"})
});

app.get("/userSighting", function(req, resp) {
  resp.json(userSightings);
});

app.listen(process.env.PORT || 3000);
