import { call, put, takeLatest } from 'redux-saga/effects'
import request, { API_URL } from 'utils/request'

import {
  CREATE_TRANSACTION,
} from './constants'

import {
  createTransactionSuccess,
  createTransactionError,
} from './actions'

const asAssetAndMetadata = (data): Object => {
  const { preview, author, name, type, technique, ...rest } = data

  return {
    asset: { preview, author, name, type, technique },
    metadata: { ...rest },
  }
}

export function* createTransactionRequest({ payload }): Saga {
  try {
    const resp = yield call(request,
      `${API_URL}/create-transaction`,
      { method: 'POST', body: asAssetAndMetadata(payload.data) })

    yield put(createTransactionSuccess({ data: resp }))
  } catch (err) {
    yield put(createTransactionError(err))
  }
}

export default function* sagaLifecycle(): Saga {
  yield takeLatest(CREATE_TRANSACTION, createTransactionRequest)
}

// export default function* rootSaga() {
//   // if necessary, start multiple sagas at once with `all`
//   yield [
//     takeLatest(LOAD_REPOS, getRepos),
//     takeLatest(LOAD_USERS, getUsers),
//   ]
// }
