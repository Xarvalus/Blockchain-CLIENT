import * as React from 'react'
import { Container } from 'reactstrap'

import { H1 } from 'components/Heading'

const AboutPage = (): React.Node => (
  <Container>
    <H1>Readme</H1>

    <div>
      <h2 id="blockchainclient">Blockchain Client</h2>

      <p>Proof of Concept of business blockchain node network. Handcrafted thanks to <a href="https://github.com/bigchaindb">BigchainDB</a>.</p>

      <p>
        <img src="/static/assets/docs/filled-form.png" alt="Filled Create Transaction Form"/>
      </p>

      <h4 id="disclaimerstatepoc">Disclaimer - State: PoC</h4>

      <p>App consists of many elements, mostly unfinished, provided just in purpose of legitimating proposed Proof of
        Concept functionality.</p>

      <h3 id="solutionconcept">Solution concept</h3>

      <p>Build on <a href="https://github.com/react-boilerplate/react-boilerplate">react-boilerplate</a> with <a
        href="https://github.com/zeit/next.js">NextJS</a> as complete solution for Server Side Rendering w/ battle
        tested react.</p>

      <ul>
        <li>React + Redux, Saga, React Router 4,</li>
        <li>Reselect, ImmutableJS,</li>
        <li>SSR w/ NextJS (Node),</li>
        <li>PWA ready,</li>
        <li><em>GraphQL</em> [unaccomplished],</li>

        <li><em>SocketIO</em> [unaccomplished],</li>
        <li>Flow,</li>
        <li>Styled Components,</li>
        <li>Jest testing,</li>
      </ul>

      <p>With <a href="https://github.com/creativetimofficial/now-ui-dashboard">Now UI Dashboard</a> theme.</p>

      <h2 id="installation">Installation</h2>
      <pre>
        <code className="bash language-bash">yarn install</code>
      </pre>

      <h2 id="development">Development</h2>
      <pre>
        <code className="bash language-bash">yarn start</code>
      </pre>
    </div>
  </Container>
)

export default AboutPage
