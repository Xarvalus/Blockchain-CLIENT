import React from 'react'
import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

import { FormattedMessage } from 'react-intl'

import HomePage from '../index'
import messages from '../messages'

describe('<HomePage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it('renders correctly', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer
      .render(<HomePage />)

    expect(snapshot).toMatchSnapshot()
  })

  it('text matches localization', () => {
    expect(wrapper.find(FormattedMessage).props().defaultMessage).toBe(messages.header.defaultMessage)
  })
})
