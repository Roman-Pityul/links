const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const linkRouter = require('./linkRouter')
const redirectRouter = require('./redirectRouter')

router.use('/user', userRouter)
router.use('/link', linkRouter)
router.use('/t', redirectRouter)

module.exports = router