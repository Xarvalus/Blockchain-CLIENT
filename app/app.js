/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill'

// Import all the third party stuff
import React from 'react'
import { StaticRouter } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory, createMemoryHistory } from 'history'

import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'

// Import root app
import App from 'containers/App'

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider'

import configureStore from './configureStore'

// Import i18n messages
import { translationMessages } from './i18n'

// Import CSS reset and Global Styles
import './global-styles'

// Create redux store with history
const initialState = {}

// @TODO dirty workaround for indicating server/client side
let history
if (typeof document !== 'undefined') {
  history = createBrowserHistory()
} else {
  history = createMemoryHistory()
}

type Props = { url: Object }
export class RootApp extends React.Component<Props> {
  renderServer = () => {
    const { url } = this.props

    const { asPath } = url
    const context = {}

    return (
      // <Provider> comes along from `withReduxSaga()`
      <LanguageProvider messages={translationMessages}>
        <StaticRouter
          location={asPath}
          context={context}
        >
          <App />
        </StaticRouter>
      </LanguageProvider>
    )
  }

  renderClient = () => (
    // <Provider> comes along from `withReduxSaga()`
    <LanguageProvider messages={translationMessages}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LanguageProvider>
  )


  render() {
    // @TODO dirty workaround for indicating server/client side
    const isServer = (typeof document === 'undefined')

    return isServer
      ? this.renderServer()
      : this.renderClient()
  }
}

// @TODO more suitable place being configureStore
// next wrapper for redux and saga
const withReduxSaga = (Component) =>
  withRedux(() => configureStore(initialState, history))(nextReduxSaga(Component))

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}

export default withReduxSaga(RootApp)
