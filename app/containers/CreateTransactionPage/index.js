import * as React from 'react'
import Immutable from 'immutable'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form/immutable'

import Sidebar from 'components/DashboardSidebar'
import DashboardNavigation from 'components/DashboardNavigation'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

import CreateTransactionForm from 'containers/Forms/CreateTransactionForm'

import Preview from './Preview'
import { createTransaction } from './actions'
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
  actions: bindActionCreators({ createTransaction }, dispatch),
})

type Props = {
  actions: {
    createTransaction: Function,
  },
  form: Immutable.Map,
  isSuccess: boolean,
  isLoading: boolean,
  errors: Immutable.Map,
}

@compose(
  injectReducer({ key: 'createTransactionReducer', reducer }),
  injectSaga({ key: 'createTransactionSaga', saga }),
  connect(mapStateToProps, mapDispatchToProps)
)
export default class CreateTransactionPage extends React.PureComponent<Props> {
  componentDidUpdate() {
    const { isSuccess, isLoading, errors } = this.props

    if (isSuccess && !isLoading && errors.isEmpty()) {
      alert('Transaction successfully send, shall be created soon') // eslint-disable-line no-alert
    }
  }

  createAssetTransaction = () => {
    const { actions, form } = this.props

    const previewBase64 = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(form.get('preview'))

      reader.onload = (): void => resolve(reader.result)
      reader.onerror = (error): void => reject(error)
    })

    previewBase64
      .then((preview) => {
        const data = { ...form.toJS(), preview }

        actions.createTransaction({ data })
      })
      .catch(() => {
        actions.createTransaction({ data: form.toJS() })
      })
  }

  render(): React.Node {
    const { form } = this.props

    return (
      <div>
        <Sidebar />

        <div className="main-panel">
          <DashboardNavigation />

          <div className="panel-header panel-header-lg" />
          <div className="content">
            <div className="row">
              <div className="col-md-7">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-category">Create digital asset of physical piece of art</h5>
                    <h4 className="card-title">Create Art Asset</h4>
                  </div>
                  <div className="card-body">
                    <CreateTransactionForm onSubmit={this.createAssetTransaction} />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-category">Preview of the Art Asset</h5>
                    <Preview file={form.get('preview')} />
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
