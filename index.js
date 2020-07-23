const express = require ('express')
const app= express()
const bodyParser = require('body-parser')
const models = require('./models')
const cors = require('cors');
const port = 4000;
const experienceRouter = require('./routes/experienceRouter');
const formationRouter = require('./routes/formationRouter');
const langageRouter = require('./routes/langageRouter');
const projetRouter = require('./routes/projetRouter');
const userRouter = require('./routes/userRouter');


app.use(bodyParser({
    extented : true 
}))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send('home')
  })
 
  app.use('/users', userRouter);
  app.use('/langages', langageRouter);
  app.use('/formations', formationRouter);
  app.use('/projets', projetRouter);
  app.use('/experiences', experienceRouter);
models
    .sequelize
    .sync()
    .then(app.listen(port,()=> {
        console.log('Server is running')
    } ))