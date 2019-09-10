// import dependencies
//import express from 'express';
const express = require("express");
const bodyParser = require("body-parser");
//import bodyParser from 'body-parser';
const mongoose = require("mongoose");
//import mongoose from 'mongoose';
//import logger from 'morgan';
const logger = require("morgan");
//import router from './server/routes/route';
var routes = require('../server/routes/route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('mongodb://ankit1992:sba18430ankit@ds125362.mlab.com:25362/ngcrud',{useNewUrlParser:true})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
  routes.configure(app);


app.listen(process.env.PORT || 5035, (port) => {
  console.log(`Our server is running on port ${port}`);
});