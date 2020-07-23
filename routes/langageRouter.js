const express = require('express');
const app = express();
const langageRouter = express.Router();
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


// get All langage


langageRouter.get('/', (req, res)=> {
    models
     .Langage
     .findAll()
     .then(x => res.json(x))
})



// post langage

langageRouter.post('/', (req,res) => {
  models
    .Langage
    .create(req.body)
    .then(x => res.json(x))
});


//   update langage

langageRouter.put('/', (req,res) => {
  models
    .Langage
    .create(req.body)
    .then(x => res.json(x))
});


//   update langage

langageRouter.delete('/:id', (req,res) => {
  models
    .Langage
    .create({
      where: {
        langage_ID : req.params.id
      }
    })
    .then(x => res.json(x))
});
module.exports = langageRouter