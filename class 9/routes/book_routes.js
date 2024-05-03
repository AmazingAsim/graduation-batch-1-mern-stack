let express = require('express');
let bookController = require('../controller/book_controller')
let router = express.Router();

router.get('/',bookController.getBooks)
router.post('/addbook',bookController.addBook);


module.exports = router;