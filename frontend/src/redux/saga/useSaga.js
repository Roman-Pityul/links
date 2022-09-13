import { call, put, takeLatest } from "redux-saga/effects"

import { userApi } from '../../api/userApi'
import { login, setServerMessage } from '../slices/userSlice'
import { userHelperActions } from './helperActions'

function* loginRequest({ payload }) {
  try {
    const res = yield call(userApi.login, payload)
    yield put(login(res.data))
  } catch (e) {
    yield put(setServerMessage(e.response.data.message))
  }
}

function* registerRequest({ payload }) {
  try {
    const res = yield call(userApi.register, payload)
    yield put(setServerMessage(res.data.message))
  } catch (e) {
    yield put(setServerMessage(e.response.data.message))
  }
}

export function* userSaga() {
  yield takeLatest(userHelperActions.LOGIN_ACTION, loginRequest)
  yield takeLatest(userHelperActions.REGISTER_ACTION, registerRequest)
}