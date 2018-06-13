import Immutable, { fromJS } from 'immutable'

import {
  TRANSFER_TRANSACTION,
  TRANSFER_TRANSACTION_SUCCESS,
  TRANSFER_TRANSACTION_ERROR,
} from './constants'


const initialState = fromJS({
  isLoading: false,
  isSuccess: false,
  errors: new Immutable.Map(),
})

function homeReducer(state = initialState, action): Object {
  switch (action.type) {
    case TRANSFER_TRANSACTION:
      return state
        .set('isLoading', true)
        .set('isSuccess', false)
        .set('errors', new Immutable.Map())

    case TRANSFER_TRANSACTION_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isSuccess', true)

    case TRANSFER_TRANSACTION_ERROR:
      return state
        .set('isLoading', false)
        .set('isSuccess', false)
        .set('errors', fromJS(action.errors))

    default:
      return state
  }
}

export default homeReducer
