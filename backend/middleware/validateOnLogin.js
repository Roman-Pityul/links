const { check, validationResult } = require('express-validator')

exports.validateOnLogin = [
  check('email', 'Некорректный email').normalizeEmail().isEmail(),
  check('password', 'Поле обязательно для заполнения').exists(),

  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({
        errors: error.array(),
        message: "Некорректные данные"
      })
    }
    next()
  }
]