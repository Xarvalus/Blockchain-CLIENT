import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { Container } from 'reactstrap'
import { H1 } from 'components/Heading'

import messages from './messages'

const HomePage = (): React.Node => (
  <Container>
    <H1><FormattedMessage {...messages.header} /></H1>
  </Container>
)

export default HomePage
