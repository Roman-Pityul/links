const Router = require('express')
const router = new Router()
const linkController = require('../controllers/linkController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, linkController.getLinks)
router.post('/generate', authMiddleware, linkController.generate)
router.get('/:id', authMiddleware, linkController.getOneLink)

module.exports = router

