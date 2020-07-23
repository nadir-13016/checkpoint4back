const express = require('express');
const app = express();
const experienceRouter = express.Router();
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


// get All experience


experienceRouter.get('/', (req, res)=> {
    models
     .Experience
     .findAll()
     .then(x => res.json(x))
})


// post experience

experienceRouter.post('/', (req,res) => {
    models
      .Experience
      .create(req.body)
      .then(x => res.json(x))
  });


//   update user

experienceRouter.put('/', (req,res) => {
    models
      .experience
      .create(req.body)
      .then(x => res.json(x))
  });


  //   update experience

experienceRouter.delete('/:id', (req,res) => {
    models
      .experience
      .create({
        where: {
          experience_ID : req.params.id
        }
      })
      .then(x => res.json(x))
  });

  module.exports = experienceRouter