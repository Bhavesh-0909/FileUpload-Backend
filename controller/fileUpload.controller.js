const File = require('../model/file.model');

exports.localUpload = async(req, res)=>{
    try {
        const file = req.files.file;
        console.log(file)
        let path = __dirname + "/files/" + `${file.name}`;

        file.mv(path);

        res.status(200).json({
            success:true,
            message:"file upload successfully"
        })
    } catch (error) {
        console.log("Local Upload Error", error)
    }
}
