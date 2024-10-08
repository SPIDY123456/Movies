const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/UserRouter');

require('dotenv').config();
const app = express();

const PORT  = process.env.port || 7000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/', routes);


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log(`MongoDB Connected...`))
  .catch((err) => console.log("Couldnt connected to MongoDB"));

  app.listen(PORT, ()=> console.log(`Listening to port :${PORT}`))