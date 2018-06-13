import * as React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import FileField from './FileField'

type Props = { handleSubmit: Function }

@reduxForm({
  form: 'createAssetTransaction',
})
export default class CreateTransactionForm extends React.PureComponent<Props> {
  render(): React.Node {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        { /* @TODO should be composed of reactstrap's Form components */ }

        <div className="form-group">
          <label htmlFor="name">Asset Name</label>
          <Field type="text" className="form-control" name="name" component="input" />

          <label htmlFor="author">Author</label>
          <Field type="text" className="form-control" name="author" component="input" />
        </div>

        <div className="form-group">
          <label htmlFor="type">Asset Category</label>
          <Field className="form-control" name="type" component="select">
            <option value="Painting">Painting</option>
            <option value="Drawing">Drawing</option>
            <option value="Sculpture">Sculpture</option>
          </Field>

          <label htmlFor="technique">Technique</label>
          <Field type="text" className="form-control" name="technique" component="input" />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price estimation</label>
          <Field type="text" className="form-control" name="price" component="input" />

          <label htmlFor="auctionHouse">Auction House</label>
          <Field type="text" className="form-control" name="auctionHouse" component="input" />
        </div>
        <div className="form-group clearfix">
          <label htmlFor="preview">
            <span className="btn btn-primary mb-2 float-left">Upload preview</span>
          </label>
          <Field id="preview" className="form-control" name="preview" component={FileField} />

          <button type="submit" className="btn btn-primary mb-2 float-right">Submit</button>
        </div>
      </form>
    )
  }
}
