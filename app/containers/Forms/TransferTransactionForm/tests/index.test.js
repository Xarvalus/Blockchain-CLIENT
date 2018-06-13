import React from 'react'
// import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

import TransferTransactionForm from '../index'

describe('<TransferTransactionForm />', () => {
  // let wrapper
  // beforeEach(() => {
  //   wrapper = shallow(<TransferTransactionForm />)
  // })

  it('renders correctly', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer
      .render(<TransferTransactionForm />)

    expect(snapshot).toMatchSnapshot()
  })
})
