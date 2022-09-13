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
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label htmlFor="email">Email</label>
          </div>

          {touched.email && errors.email && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.email}</p>)}

          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              name='password'
              onKeyDown={(e) => { if (e.key = 'Enter') { handleSubmit() } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label htmlFor="password">Password</label>
          </div>

          {touched.password && errors.password && (<p style={{ color: "red", marginTop: "0px", fontWeight: "bold" }}>{errors.password}</p>)}

          <button onClick={handleSubmit} type="button" className="waves-effect waves-light btn blue accent-2">зарегистрировать</button>
          <Link to='/'><button className="waves-effect waves-teal btn-flat">Войти</button></Link>
        </div>
      )}
    </Formik>
  )
}

export default FormRegister