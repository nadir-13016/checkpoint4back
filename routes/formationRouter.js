const express = require('express');
const app = express();
const formationRouter = express.Router();
const models = require('../models'); 
const Sequelize = require('sequelize');
const { Op } = require("sequelize")
const db = Sequelize.db;
const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended : true
}))


// get All formation


formationRouter.get('/', (req, res)=> {
    models
     .Formation
     .findAll()
     .then(x => res.json(x))
})



// post formation

formationRouter.post('/', (req,res) => {
  models
    .Formation
    .create(req.body)
    .then(x => res.json(x))
});


//   update formation

formationRouter.put('/', (req,res) => {
  models
    .Formation
    .create(req.body)
    .then(x => res.json(x))
});


//   update formation

formationRouter.delete('/:id', (req,res) => {
  models
    .Formation
    .create({
      where: {
        formation_ID : req.params.id
      }
    })
    .then(x => res.json(x))
});

module.exports = formationRouter