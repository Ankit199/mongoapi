"use strict";

// import dependencies
//import express from 'express';
var express = require("express");
var bodyParser = require("body-parser");
//import bodyParser from 'body-parser';
var mongoose = require("mongoose");
//import mongoose from 'mongoose';
//import logger from 'morgan';
var logger = require("morgan");
//import router from './server/routes/route';
var routes = require('../server/routes/route');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('mongodb://ankit1992:sba18430ankit@ds125362.mlab.com:25362/ngcrud', { useNewUrlParser: true }).then(function () {
  console.log('Database connected');
}).catch(function (error) {
  console.log('Error connecting to database');
});
routes.configure(app);

app.listen(process.env.PORT || 5035, function () {
  console.log("Our server is running on port 5035");
});
//# sourceMappingURL=app.js.map