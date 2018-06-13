import React from 'react'
// import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

import AboutPage from '../index'

describe('<AboutPage />', () => {
  // let wrapper
  // beforeEach(() => {
  //   wrapper = shallow(<HomePage />)
  // })

  it('renders correctly', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer
      .render(<AboutPage />)

    expect(snapshot).toMatchSnapshot()
  })
})
