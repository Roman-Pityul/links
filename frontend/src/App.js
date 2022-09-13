import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Create, Detail, Login, Register, Links } from './pages'
import { Container, Navbar } from './components'
import { USER_DATA } from './helpers/constants'
import { login } from './redux/slices/userSlice'

import './App.css';

function App() {
  const dispatch = useDispatch()

  const { isAuth, token, userId } = useSelector(state => state.user)

  React.useEffect(() => {
    if (localStorage.getItem(USER_DATA) != null) {
      dispatch(login(JSON.parse(localStorage.getItem(USER_DATA))))
    }
  }, [dispatch])

  React.useEffect(() => {
    if (!isAuth) {
      localStorage.removeItem(USER_DATA)
    }
    if (isAuth) {
      localStorage.setItem(USER_DATA, JSON.stringify({ token, userId }))
    }
  }, [isAuth])

  if (isAuth) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Container />}>
            <Route index element={<Create />} />
            <Route path='/create' element={<Create />} />
            <Route path='/detail:id' element={<Detail />} />
            <Route path='/links' element={<Links />} />
            <Route
              path="*"
              element={<Navigate to="/create" />}
            />
          </Route>
        </Routes>
      </>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Container />}>
        <Route index element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
