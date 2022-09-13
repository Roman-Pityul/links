import { call, put, takeLatest } from "redux-saga/effects"

import { linkApi } from '../../api/linkApi'
import { userHelperActions } from '../saga/helperActions'
import { setServerMessage, setLinks, setLink } from '../../redux/slices/userSlice'

function* generateRequest({ payload }) {
  try {
    yield call(linkApi.generate, payload)
    yield put(setServerMessage('Ссылка создана'))
  } catch (e) {
    yield put(setServerMessage(e.response.data.message))
  }
}

function* getLinksRequest({ payload }) {
  try {
    const res = yield call(linkApi.getLinks, payload)
    yield put(setLinks(res.data))
  } catch (e) {
    yield put(setServerMessage(e.response.data.message))
  }
}

function* getOneLinkRequest({ payload }) {
  try {
    const res = yield call(linkApi.getOneLink, payload)
    yield put(setLink(res.data))
  } catch (e) {
    yield put(setServerMessage(e.response.data.message))
  }
}

export function* linkSaga() {
  yield takeLatest(userHelperActions.GENERATE_ACTION, generateRequest)
  yield takeLatest(userHelperActions.GET_LINKS_ACTION, getLinksRequest)
  yield takeLatest(userHelperActions.GET_ONE_LINK_ACTION, getOneLinkRequest)
}
