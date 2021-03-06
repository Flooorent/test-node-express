var express = require('express')
var bookinstanceController = require('../controllers/bookinstanceController')

var router = express.Router()

router.get('/create', bookinstanceController.bookinstance_create_get)
router.post('/create', bookinstanceController.bookinstance_create_post)

router.get('/:id/delete', bookinstanceController.bookinstance_delete_get)
router.post('/:id/delete', bookinstanceController.bookinstance_delete_post)

router.get('/:id/update', bookinstanceController.bookinstance_update_get)
router.post('/:id/update', bookinstanceController.bookinstance_update_post)

router.get('/:id', bookinstanceController.bookinstance_detail)

module.exports = router
