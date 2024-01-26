const mongoose = require('mongoose');
const transportor = require('../db/nodemailer.db')

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

fileSchema.post('save', function(doc) {
    try {
        let info = transportor.sendMail({
            from:"Bhavesh",
            to:doc.email,
            subject:"File Upload Successfully",
            html:`<h2>File Uploaded</h2>
            <p>Thanks for using our services</p>
            <p>View your image here :<a href=${doc.imageUrl}>${doc.imageUrl}</a></p>`
        })
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = mongoose.model("File", fileSchema)