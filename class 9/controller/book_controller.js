let fs = require('fs');
let bookJsonData = require('../repo/books.json')

let getBooks = function(req,res){
    res.send(bookJsonData)
}


let addBook = function(req,res){
    let bookData = req.body;
    let data = bookJsonData;
    data.push(bookData);
    fs.writeFile('./repo/books.json',JSON.stringify(data),function(err){
        if(err) throw err;
        res.send('data is saved');
    })
    
    res.send('this is addbook route');
}

module.exports = {getBooks,addBook};