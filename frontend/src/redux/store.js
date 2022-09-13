import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"

import user from '../redux/slices/userSlice'
import { rootSaga } from './saga/saga'

const sagaMiddleware = createSagaMiddleware()

const rootStore = combineReducers({
  user: user
})


export const store = configureStore({
  reducer: rootStore,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)