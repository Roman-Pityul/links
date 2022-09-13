import { all } from 'redux-saga/effects'

import { userSaga } from './useSaga'
import { linkSaga } from './linkSaga'

export function* rootSaga() {
    yield all([userSaga(), linkSaga()])
}