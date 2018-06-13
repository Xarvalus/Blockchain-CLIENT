import Immutable, { fromJS } from 'immutable'

import {
  CREATE_TRANSACTION,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,
} from './constants'


const initialState = fromJS({
  isLoading: false,
  isSuccess: false,
  errors: new Immutable.Map(),
})

function homeReducer(state = initialState, action): Object {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return state
        .set('isLoading', true)
        .set('isSuccess', false)
        .set('errors', new Immutable.Map())

    case CREATE_TRANSACTION_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isSuccess', true)

    case CREATE_TRANSACTION_ERROR:
      return state
        .set('isLoading', false)
        .set('isSuccess', false)
        .set('errors', fromJS(action.errors))

    default:
      return state
  }
}

export default homeReducer
