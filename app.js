const express = require('express');
const routes = require('./routes/fileUpload.route')
const fileUpload = require('express-fileupload')

const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));
app.use('/api/v1/upload', routes);

module.exports = app;