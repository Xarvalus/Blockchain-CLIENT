import * as React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import FileField from "../CreateTransactionForm/FileField";

type Props = { handleSubmit: Function }

@reduxForm({
  form: 'createAssetTransaction',
})
export default class TransferTransactionForm extends React.PureComponent<Props> {
  render(): React.Node {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transactionId">Transaction ID</label>
          <Field type="text" className="form-control" name="transactionId" component="input" />
        </div>

        <div className="form-group">
          <label htmlFor="note">Note</label>
          <Field type="text" className="form-control" name="note" component="input" />

          <label htmlFor="price">Price</label>
          <Field type="text" className="form-control" name="price" component="input" />

          <label htmlFor="auctionHouse">Auction House</label>
          <Field type="text" className="form-control" name="auctionHouse" component="input" />
        </div>

        <div className="form-group clearfix">
          <button type="submit" className="btn btn-primary mb-2 float-right">Submit</button>
        </div>
      </form>
    )
  }
}
