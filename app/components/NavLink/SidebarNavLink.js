import * as React from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'

type Props = { children: React.Node }

const NavLink = (props: Props) => (
  <ReactRouterNavLink {...props}>
    <i className="now-ui-icons design_app" />
    { props.children }
  </ReactRouterNavLink>
)

export default NavLink
