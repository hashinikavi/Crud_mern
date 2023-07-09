const mongoose = require('module');

const postSchema = new mongoose.Schema({

    Topic:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required : true
    },

    postCategory:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', postSchema);