import React from 'react'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import { NavLink as BootstrapNavLink } from 'reactstrap'

const NavLink = (props) => (
  <BootstrapNavLink tag={ReactRouterNavLink} {...props} />
)

export default NavLink
