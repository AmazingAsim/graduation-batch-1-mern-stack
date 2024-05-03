require('dotenv').config();
let express = require('express');
let bookRouter = require('./routes/book_routes')
let app = express();
let port = process.env.PORT || 8080;
app.use(express.static('./views'));
app.use(express.urlencoded());
app.use(express.json());
app.use('/books',bookRouter);

app.listen(port,function(){
    console.log(`server is running on port ${port}`)
});