var express = require('express')
var bookController = require('../controllers/bookController')
var authorController = require('../controllers/authorController')
var genreController = require('../controllers/genreController')
var bookinstanceController = require('../controllers/bookinstanceController')

var router = express.Router()

router.get('/', bookController.index)
router.get('/books', bookController.book_list)
router.get('/authors', authorController.author_list)
router.get('/genres', genreController.genre_list)
router.get('/bookinstances', bookinstanceController.bookinstance_list)

module.exports = router
