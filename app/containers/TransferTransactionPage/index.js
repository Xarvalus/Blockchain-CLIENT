import * as React from 'react'
import Immutable from 'immutable'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form/immutable'

import Sidebar from 'components/DashboardSidebar'
import DashboardNavigation from 'components/DashboardNavigation'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

import TransferTransactionForm from 'containers/Forms/TransferTransactionForm'

import { transferTransaction } from './actions'
import { selectIsSuccess, selectIsLoading, selectErrors } from './selectors'
import reducer from './reducer'
import saga from './saga'

const mapStateToProps = (state: Object): Object => ({
  form: getFormValues('createAssetTransaction')(state) || new Immutable.Map(),
  isSuccess: selectIsSuccess,
  isLoading: selectIsLoading,
  errors: selectErrors,
})

const mapDispatchToProps = (dispatch): Object => ({
  actions: bindActionCreators({ transferTransaction }, dispatch),
})

type Props = {
  actions: {
    transferTransaction: Function,
  },
  form: Immutable.Map,
  isSuccess: boolean,
  isLoading: boolean,
  errors: Immutable.Map,
}

@compose(
  injectReducer({ key: 'transferTransactionReducer', reducer }),
  injectSaga({ key: 'transferTransactionSaga', saga }),
  connect(mapStateToProps, mapDispatchToProps)
)
export default class TransferTransactionPage extends React.PureComponent<Props> {
  componentDidUpdate() {
    const { isSuccess, isLoading, errors } = this.props

    if (isSuccess && !isLoading && errors.isEmpty()) {
      alert('Transaction successfully send, shall be transferred soon') // eslint-disable-line no-alert
    }
  }

  transferAssetTransaction = () => {
    const { actions, form } = this.props

    actions.transferTransaction({ data: form })
  }

  render(): React.Node {
    return (
      <div>
        <Sidebar />

        <div className="main-panel">
          <DashboardNavigation />

          <div className="panel-header panel-header-lg" />
          <div className="content">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-category">Move ownership from one person to another</h5>
                    <h4 className="card-title">Transfer Art Asset</h4>
                  </div>
                  <div className="card-body">
                    <TransferTransactionForm onSubmit={this.transferAssetTransaction} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
