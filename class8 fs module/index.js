require('dotenv').config();
let express = require('express');
let app = express();
let users = require('./users.json')
let path = require('path')
let port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname,'views')));

app.get('/getUsers',function(req,res){
   res.status(200).send(users);
})

app.get('/greet/:name',function(req,res){
    let params = req.params;
    res.send(`Good morning ${params.name}`);
})
app.post('/adduser',function(req,res){
    res.send('user is added')
})
app.listen(port,function(){
    console.log(`server is running on port ${port}`)
})