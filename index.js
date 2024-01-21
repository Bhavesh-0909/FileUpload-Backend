const {app} = require('./app.js')
const mongoDB = require('./db/mongo.db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`)
});

mongoDB()