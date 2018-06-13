import React from 'react'

import { SidebarNavLink } from 'components/NavLink'

const DashboardSidebar = () => (
  <div className="sidebar" data-color="orange">
    <div className="logo">
      <a href="/" className="simple-text logo-normal">
        Blockchain Client
      </a>
    </div>
    <div className="sidebar-wrapper">
      <ul className="nav">

        <li>
          <SidebarNavLink to="/dashboard">Dashboard</SidebarNavLink>
        </li>

        <li>
          <SidebarNavLink to="/create-transaction">Create Transaction</SidebarNavLink>
        </li>

        <li>
          <SidebarNavLink to="/transfer-transaction">Transfer Transaction</SidebarNavLink>
        </li>

      </ul>
    </div>
  </div>
)

export default DashboardSidebar
