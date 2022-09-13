const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const { validateOnRegister } = require('../middleware/validateOnRegister')
const { validateOnLogin } = require('../middleware/validateOnLogin')

router.post('/login', validateOnLogin, userController.login)
router.post('/register', validateOnRegister, userController.register)

module.exports = router