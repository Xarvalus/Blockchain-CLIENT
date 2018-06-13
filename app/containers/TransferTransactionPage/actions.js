import {
  TRANSFER_TRANSACTION,
  TRANSFER_TRANSACTION_SUCCESS,
  TRANSFER_TRANSACTION_ERROR,
} from './constants'

const transferTransaction = (payload): Object => ({ type: TRANSFER_TRANSACTION, payload })
const transferTransactionSuccess = (): Object => ({ type: TRANSFER_TRANSACTION_SUCCESS })
const transferTransactionError = (errors): Object => ({ type: TRANSFER_TRANSACTION_ERROR, errors })

export {
  transferTransaction,
  transferTransactionSuccess,
  transferTransactionError,
}
