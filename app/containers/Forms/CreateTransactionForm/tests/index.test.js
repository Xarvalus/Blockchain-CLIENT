import React from 'react'
// import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

import CreateTransactionForm from '../index'

describe('<CreateTransactionForm />', () => {
  // let wrapper
  // beforeEach(() => {
  //   wrapper = shallow(<CreateTransactionForm />)
  // })

  it('renders correctly', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer
      .render(<CreateTransactionForm />)

    expect(snapshot).toMatchSnapshot()
  })
})
