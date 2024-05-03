require('dotenv').config();
let express = require('express');
let dbConnect = require('./config/database');
let userRouter = require('./router/user_routes')
dbConnect()
let app = express();
let port = process.env.PORT || 8080;
app.use(express.static('./views'))

app.use('/users',userRouter);

app.listen(port, function(){console.log(`server is running on port ${port}`)});
