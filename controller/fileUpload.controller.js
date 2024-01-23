const File = require('../model/file.model');
const cloudinary = require('cloudinary').v2;

const supportType = ["jpeg", "mp4", "jpg", "png", "mov"]

const SupportFileType = (fileType)=>{
    return supportType.includes(fileType);
}

const fileUploaderOnCloudinary = async(file, folder)=>{
    const options = {
        folder,
        quality:90,
        resource_type: "auto"
    }
    console.log(options)
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

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
        res.status(500).json({
            message:"Local Upload Error",
            success:false
        })
    }
}

exports.fileUploader = async(req, res)=>{
    try {
        const {name, email} = req.body;

        const file = req.files.file;
        console.log(file)

        const filetype = file.name.split('.')[1].toLowerCase();
        console.log(filetype)
        if(!SupportFileType(filetype)){
            return res.status(400).json({
                message:"file type not supported"
            })
        }

        const response = await fileUploaderOnCloudinary(file, "file");
        console.log(response)
        const dbEntry = await File.create({
            name, email, imageUrl:response.secure_url
        })

        res.status(200).json({
            success:true,
            message:"file Uploader",
            url:response.secure_url
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"file Upload error"
        })
    }
}
