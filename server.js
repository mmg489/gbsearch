require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
app.use(routes);

//connect to mongoDB

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});

//start the server
app.listen(PORT,() => {
    console.log('API server now listening on PORT 5000!');
});