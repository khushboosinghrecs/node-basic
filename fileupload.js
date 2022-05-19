const express = require("express");
const multer = require('multer');
const app = express();
const upload = multer(
    {
        Storage: multer.diskStorage({
            destination: function(req, file, cb){
                cb(null, "files")
                    
            }, filename: function(req, file, cb){
                cb(null, file.fieldname + "-"+ Date.now() + ".jpg"
                )
            }
        })
    }
).single("user_file");
app.post("/upload", upload, (req, res)=>{
    res.send("file upload");

})

app.listen(4000);