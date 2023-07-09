const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const postRoutes = reqyire('./routes/posts');

//app middleware
app.use(bodyParser.jason());

const PORT = 8000;
const DB_URL = 'mongodb+srv://hashinik:Sandini123@cluster0.zi2sjzo.mongodb.net/retryWrites=true&w=majority' //check whether the db name is necessary or not.

mongoose.connect(DB_URL) //didn't add the warnings because i didn't have any. time 17.10
    .then(() =>{
        console.log('DB connected');
    })
    .catch((err) => console.log('DB connection error',err))

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});