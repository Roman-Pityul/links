const { Router } = require('express')
const router = Router()
const redirectController = require('../controllers/redirectController')

router.get('/:code', redirectController.redirect)

module.exports = router