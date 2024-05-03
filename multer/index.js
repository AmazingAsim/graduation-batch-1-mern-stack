let express = require('express');
let multer = require('multer');
let path = require('path')
let app = express();

app.use(express.static('./views'))
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,req.id+path.extname(originalname))
    }
});

let uploads = multer({storage:storage})
function checkName(req,res,next){
    let name = req.params.name;
    if(name == "Asim"){
        next()
    }
    else{
        res.send('you are not authorize for the visit')
    }
} 

app.get('/user/:name',checkName,function(req,res){
    res.send('Hello Asim')
})

app.post('/addProfile',uploads.single('profile'),function(req,res){
        if(!req.file){
            res.send('file is not selected')
        }
        else{
            res.send('file is uploaded')
        }
})


app.listen(8080,function(){console.log('server is running on port 8080')})