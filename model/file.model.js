const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
    },
    email:{
        type:String
    }
}, {timestamps:true});

module.exports = mongoose.model("File", fileSchema)