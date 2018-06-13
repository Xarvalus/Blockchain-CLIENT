import { createSelector } from 'reselect'

const selectTransferTransactionState = (state): Object => state.get('transferTransactionReducer')

const selectIsLoading = createSelector(
  selectTransferTransactionState,
  (transferTransactionState) => transferTransactionState.get('isLoading')
)

const selectIsSuccess = createSelector(
  selectTransferTransactionState,
  (transferTransactionState) => transferTransactionState.get('isSuccess')
)

const selectErrors = createSelector(
  selectTransferTransactionState,
  (transferTransactionState) => transferTransactionState.get('errors')
)

export {
  selectIsLoading,
  selectIsSuccess,
  selectErrors,
}
