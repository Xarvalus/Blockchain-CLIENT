import React from 'react'
import { withRouter } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

import NavLink from 'components/NavLink'

import StyledHeader from './StyledHeader'

type Props = { location: { pathname: string } }

@withRouter
export default class Header extends React.Component<Props> {
  static routesWithNoHeader =
    ['/dashboard', '/transfer-transaction', '/create-transaction', 'asset/:id']
  state = { isOpen: false }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { pathname } = this.props.location

    // no header on dashboard
    // @TODO should be extracted to eg DashboardLayout
    if (Header.routesWithNoHeader.includes(pathname)) return null

    return (
      <StyledHeader>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Blockchain Client</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" exact>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/terms-of-service">ToS</NavLink>
              </NavItem>

              <NavItem className="dashboard-link">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </StyledHeader>
    )
  }
}
