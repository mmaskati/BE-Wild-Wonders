//Define dependencies
const express = require('express');

//initialize express
const app = express();
var path = require("path");

//require and initialize .ev
require('dotenv').config();

//define port
//const port = process.env.PORT;

//This allows the userType to be available in all pages
// app.use(function (req, res, next) {
// // console.log("req.user", req.user)
// res.locals.user = req.user;
// console.log(res.locals.user);
// next();
// });

//database configuration & passport
const db = require('./config/db');

//Require & import routes

// const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
//imports Routes
const indexRouter= require("./routes/index");
const recordRouter= require("./routes/record");
const speciesRouter= require("./routes/species");

//Mount routes
app.use('/', indexRouter);
app.use('/record', recordRouter);
app.use('/species', speciesRouter);


// app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

//Console
// app.listen(port, () => {
//     console.log(`WILD WONDERS App running on Port \u001b[1;35m${port}\u001b[0m`);
// });

//use for scales object to be available in all views
// app.use(function (req, res, next) {
//     res.locals.scales = scales;
//     next();
//   });

