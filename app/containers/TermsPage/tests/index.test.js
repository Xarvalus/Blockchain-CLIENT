import React from 'react'
// import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

import TermsPage from '../index'

describe('<TermsPage />', () => {
  // let wrapper
  // beforeEach(() => {
  //   wrapper = shallow(<HomePage />)
  // })

  it('renders correctly', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer
      .render(<TermsPage />)

    expect(snapshot).toMatchSnapshot()
  })
})
