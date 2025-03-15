const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const _ = require('lodash')

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.listen(port, () => {
    console.log("server is running on the port "+ port)
})

const pets = [
  {
    "id" : 1,
    "name" : "Purrsloud",
    "species" : "Cat",
    "favFoods" : ["wet food", "dry food"],
    "birthYear" : 2016,
    "photo" : "cat-2.jpg"
  },
  {
    "id" : 2,
    "name" : "Barksalot",
    "species" : "Dog",
    "birthYear" : 2008,
    "photo" : "dog-1.jpg"
  },
  {
    "id" : 3,
    "name" : "Meowsalot",
    "species" : "Cat",
    "favFoods" : ["tuna", "catnip", "celery"],
    "birthYear" : 2012,
    "photo" : "cat-1.jpg"
  }, 
  {
    "id" : 4,
    "name" : "Meowsalot",
    "species" : "Cat",
    "favFoods" : ["tuna", "catnip", "celery"],
    "birthYear" : 2012,
    "photo" : "cat-1.jpg"
  },
  {
    "id" : 5,
    "name" : "Meowsalot",
    "species" : "Cat",
    "favFoods" : ["tuna", "catnip", "celery"],
    "birthYear" : 2012,
    "photo" : "cat-1.jpg"
  },
  {
    "id" : 6,
    "name" : "Meowsalot",
    "species" : "Cat",
    "favFoods" : ["tuna", "catnip", "celery"],
    "birthYear" : 2012,
    "photo" : "cat-1.jpg"
  },
  {
    "id" : 7,
    "name" : "Meowsalot",
    "species" : "Cat",
    "favFoods" : ["tuna", "catnip", "celery"],
    "birthYear" : 2012,
    "photo" : "cat-1.jpg"
  },
  {
    "id" : 8,
    "name" : "Purrsloud",
    "species" : "Cat",
    "favFoods" : ["wet food", "dry food"],
    "birthYear" : 2016,
    "photo" : "cat-2.jpg"
  },
  {
    "id" : 9,
    "name" : "Barksalot",
    "species" : "Dog",
    "birthYear" : 2008,
    "photo" : "dog-1.jpg"
  },
]

app.get("/api/pet/:id", (req, res) => {
  const id = req.params.id
  let pet = _.find(pets, {"id": parseInt(id)})

  res.json(pet);
})

app.get("/api/pets", (req,res) => {
    res.json(pets);
})