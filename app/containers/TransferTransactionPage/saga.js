import { call, put, takeLatest } from 'redux-saga/effects'
import request, { API_URL } from 'utils/request'

import {
  TRANSFER_TRANSACTION,
} from './constants'

import {
  transferTransactionSuccess,
  transferTransactionError,
} from './actions'

const asIdAndMetadata = (data): Object => {
  const { transactionId, ...rest } = data.toJS()

  return {
    txCreatedId: transactionId,
    metadata: { ...rest },
  }
}

export function* transferTransactionRequest({ payload }): Saga {
  try {
    const resp = yield call(request,
      `${API_URL}/transfer-transaction`,
      { method: 'POST', body: asIdAndMetadata(payload.data) })

    yield put(transferTransactionSuccess({ data: resp }))
  } catch (err) {
    yield put(transferTransactionError(err))
  }
}

export default function* sagaLifecycle(): Saga {
  yield takeLatest(TRANSFER_TRANSACTION, transferTransactionRequest)
}

// export default function* rootSaga() {
//   // if necessary, start multiple sagas at once with `all`
//   yield [
//     takeLatest(LOAD_REPOS, getRepos),
//     takeLatest(LOAD_USERS, getUsers),
//   ]
// }
