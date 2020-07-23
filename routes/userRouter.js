const express = require('express');
const app = express();
const userRouter = express.Router();
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


// get All User


userRouter.get('/', (req, res)=> {
    models
     .User
     .findAll()
     .then(x => res.json(x))
})


// post User

userRouter.post('/', (req,res) => {
  models
    .User
    .create(req.body)
    .then(x => res.json(x))
});


//   update user

userRouter.put('/', (req,res) => {
  models
    .User
    .create(req.body)
    .then(x => res.json(x))
});


//   update user

userRouter.delete('/:id', (req,res) => {
  models
    .User
    .create({
      where: {
        user_ID : req.params.id
      }
    })
    .then(x => res.json(x))
});

module.exports = userRouter