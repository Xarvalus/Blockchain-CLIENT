import * as React from 'react'

import Sidebar from 'components/DashboardSidebar'
import DashboardNavigation from 'components/DashboardNavigation'

type Props = {}

// @TODO fetch list of transactions from API, allow taking actions on transactions
export default class DashboardPage extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
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
                    <h5 className="card-category">Entire assets stored within transactions in blockchain</h5>
                    <h4 className="card-title">Transactions List</h4>
                  </div>

                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="text-primary">
                          <tr>
                            <th>Transaction ID</th>
                            <th>Asset Name</th>
                            <th>Owner</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>8196ec30a...</td>
                            <td>Fraucymer</td>
                            <td>Tadeusz Brzozowski</td>
                            <td className="text-right">[ Transfer ]</td>
                          </tr>
                        </tbody>
                      </table>

                      <div
                        className="text-center"
                      >NOTE: Dedicated for selecting transactions and changing their state</div>
                    </div>
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
