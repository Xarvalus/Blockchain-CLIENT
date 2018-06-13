/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react'
import Head from 'next/head'

import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage'
import NotFoundPage from 'containers/NotFoundPage'
import TermsPage from 'containers/TermsPage'
import AboutPage from 'containers/AboutPage'
import DashboardPage from 'containers/DashboardPage'
import CreateTransactionPage from 'containers/CreateTransactionPage'
import TransferTransactionPage from 'containers/TransferTransactionPage'
import AssetPage from 'containers/AssetPage'

import Header from './Header'
import Footer from './Footer'

// @TODO extract template and integrate it with React
const App = (): React.Node => (
  <div>
    <Head>
      <title>Blockchain React Client</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />

      { /* Bootstrap 4 */ }
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous" />

      { /* Now UI Dashboard by Creative Tim */ }
      { /* @TODO css should be imported with eg. style-loader (webpack) */ }
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />

      <link href="/static/assets/css/now-ui-dashboard.css?v=1.0.1" rel="stylesheet" />
    </Head>

    <Header />

    <main>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create-transaction" component={CreateTransactionPage} />
        <Route path="/transfer-transaction" component={TransferTransactionPage} />
        <Route path="/asset/:id" component={AssetPage} />

        <Route path="/about" component={AboutPage} />
        <Route path="/terms-of-service" component={TermsPage} />

        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>

    <Footer />


    { /* @TODO dependencies should be integrated with package.json */ }
    <script src="/static/assets/js/core/jquery.min.js" />
    <script src="/static/assets/js/core/popper.min.js" />
    <script src="/static/assets/js/core/bootstrap.min.js" />
    <script src="/static/assets/js/plugins/perfect-scrollbar.jquery.min.js" />

    { /* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */ }

    { /* @TODO js assets should be integrated with React */ }
    <script src="/static/assets/js/plugins/chartjs.min.js" />
    <script src="/static/assets/js/plugins/bootstrap-notify.js" />
    <script src="/static/assets/js/now-ui-dashboard.js?v=1.0.1" />
  </div>
)

export default App
