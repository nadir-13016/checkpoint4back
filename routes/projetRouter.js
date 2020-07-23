const express = require('express');
const app = express();
const projetRouter = express.Router();
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


// get All projet


projetRouter.get('/', (req, res)=> {
    models
     .Projet
     .findAll()
     .then(x => res.json(x))
})



// post projet

projetRouter.post('/', (req,res) => {
  models
    .Projet
    .create(req.body)
    .then(x => res.json(x))
});


//   update projet

projetRouter.put('/', (req,res) => {
  models
    .Projet
    .create(req.body)
    .then(x => res.json(x))
});


//   update projet

projetRouter.delete('/:id', (req,res) => {
  models
    .Projet
    .create({
      where: {
        projet_ID : req.params.id
      }
    })
    .then(x => res.json(x))
});
module.exports = projetRouter