import * as React from 'react'

import Sidebar from 'components/DashboardSidebar'
import DashboardNavigation from 'components/DashboardNavigation'

type Props = {}

export default class AssetPage extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
  render(): React.Node {
    return (
      <div>
        <Sidebar />

        <div className="main-panel">
          <DashboardNavigation />

          <div className="panel-header panel-header-lg" />
          <div className="content">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-category">All Persons List</h5>
                    <h4 className="card-title"> Employees Stats</h4>
                  </div>
                  <div className="card-body">
                    Assets Page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
