const File = require("../models/Files")
const bcrypt = require("bcrypt");

exports.getIndex=(req,res,next)=>{
    res.render("index");
}

exports.getUpload= async(req, res,next)=>{
    const fileData = {
        path:req.file.path,
        originalName:req.file.originalname
       }
    
       if(req.body.password !=null || req.body.password != ""){
        fileData.password = await bcrypt.hash(req.body.password,10);
       }
    
       const file = await File.create(fileData)
       res.render("index",{filelink: `${req.headers.origin}/file/${file.id}`})
}

exports.handleDownload =  async (req,res)=>{
    const file = await File.findById(req.params.id);

    if(file.password != null){
        if(req.body.password ==null){
            res.render("password");
            return;
        }

        if(!await bcrypt.compare(req.body.password, file.password)){
            res.render("password", {error:true});
        }
    }

    file.downloadCount++;
    await file.save();

    console.log(file.downloadCount);
    res.download(file.path, file.originalName);
}