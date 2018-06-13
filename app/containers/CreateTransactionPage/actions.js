import {
  CREATE_TRANSACTION,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,
} from './constants'

const createTransaction = (payload): Object => ({ type: CREATE_TRANSACTION, payload })
const createTransactionSuccess = (): Object => ({ type: CREATE_TRANSACTION_SUCCESS })
const createTransactionError = (errors): Object => ({ type: CREATE_TRANSACTION_ERROR, errors })

export {
  createTransaction,
  createTransactionSuccess,
  createTransactionError,
}
