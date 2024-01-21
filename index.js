const app = require('./app.js')
const mongoDB = require('./db/mongo.db');
const {cloudinaryDB} = require('./db/cloudinary.db.js')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`)
});

mongoDB();
cloudinaryDB();