import { createSelector } from 'reselect'

const selectCreateTransactionState = (state): Object => state.get('createTransactionReducer')

const selectIsLoading = createSelector(
  selectCreateTransactionState,
  (createTransactionState) => createTransactionState.get('isLoading')
)

const selectIsSuccess = createSelector(
  selectCreateTransactionState,
  (createTransactionState) => createTransactionState.get('isSuccess')
)

const selectErrors = createSelector(
  selectCreateTransactionState,
  (createTransactionState) => createTransactionState.get('errors')
)

export {
  selectIsLoading,
  selectIsSuccess,
  selectErrors,
}
