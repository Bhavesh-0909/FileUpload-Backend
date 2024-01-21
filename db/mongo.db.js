const mongoose = require('mongoose');
require('dotenv').config()

const mongoDb = async()=>{
    await mongoose.connect(process.env.DATABASE_URI)
    .then(()=> console.log("MongoDB connected"))
    .catch((error)=> console.error("MongoDB connection Failed", error))
}

module.exports = mongoDb;