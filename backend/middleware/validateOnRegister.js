const { check, validationResult } = require('express-validator')

exports.validateOnRegister = [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 3 символов').isLength({ min: 3 }),

  (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
      return res.status(400).json({
        errors: error.array(),
        message: "Некорректные данные для регистрации"
      })
    }
    next()
  }
]