const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 8000;
const DB_URL = 'mongodb+srv://hashinik:Sandini123/@cluster0.zi2sjzo.mongodb.net/mernCrud?retryWrites=true&w=majority' //check whether the db name is necessary or not.

mongoose.connect(DB_URL)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});