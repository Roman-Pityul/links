import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { registerAction } from '../../redux/saga/helperActions'
import { clearServerMessage } from '../../redux/slices/userSlice'

import styles from './reg.module.scss'

const FormRegister = () => {

  const dispatch = useDispatch()
  const error = useSelector((state) => state.user.serverMessage)

  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите E-Mail")
      .required("Обязательно для заполнения"),
    password: yup
      .string()
      .min(3, "Минимальная длина пароля 6 символов")
      .required("Обязательно для заполнения")
  })

  React.useEffect(() => {
    if (window.M && error) {
      window.M.toast({ html: error })
    }
    dispatch(clearServerMessage())
  }, [error, dispatch])

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validateOnBlur
      onSubmit={(values) =>
        dispatch(registerAction(values)
        )}
      validationSchema={validateSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className={styles.root}>
          <h2>Регистрация</h2>
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label for="email">Email</label>
          </div>

          {touched.email && errors.email && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.email}</p>)}

          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label for="password">Password</label>
          </div>

          {touched.password && errors.password && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.password}</p>)}

          <button onClick={handleSubmit} type="button" class="waves-effect waves-light btn blue accent-2">зарегистрировать</button>
          <Link to='/'><button class="waves-effect waves-teal btn-flat">Войти</button></Link>
        </div>
      )}
    </Formik>
  )
}

export default FormRegister