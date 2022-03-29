import React, { componentDidMount } from "react";

import { connect } from "react-redux";

import { Table } from "react-bootstrap";

import { AiOutlineShopping } from "react-icons/ai";

import { BsBagPlus } from "react-icons/bs";

import { FaShoppingBasket } from "react-icons/fa";

class DashBoardMain extends React.Component {
  state = {
    notify: true,
  };

  render() {
    const {
      earning,
      order,
      sales,
      totall,
      complete,
      pending,
      processing,
      cancelled,
    } = this.props.login;
    console.log(this.props.login);
    return (
      <div className="dashboardMain">
        <div className="mainside">
          <div className="earningsite">
            <ul>
              <li>
                Earning
                <span>{earning === 0 ? "$0.00" : `${earning}`}</span>
              </li>
              <li>
                Sales
                <span>{sales === 0 ? "$0.00" : `${sales}`}</span>
              </li>
              {/* <li>
                Pageview
                <span>0</span>
              </li> */}
              <li>
                Order
                <span>{order}</span>
              </li>
            </ul>
          </div>
          <div className="order">
            <div className="orderTitle">
              <div className="left">
                <FaShoppingBasket />
                <h5>Orders</h5>
              </div>
            </div>
            <div className="orderLisst">
              <Table>
                <tbody className="ordersTable">
                  <tr>
                    <td>Total</td>
                    <td>{totall}</td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        color: "#5cb85c",
                      }}
                    >
                      Complete
                    </td>
                    <td>{complete}</td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        color: "#666",
                      }}
                    >
                      Pending
                    </td>
                    <td>{pending}</td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        color: "#2879FE",
                      }}
                    >
                      Processing
                    </td>
                    <td>{processing}</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#b10001",
                      }}
                    >
                      Cancelled
                    </td>
                    <td>{cancelled}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="order productadd">
            <div className="orderTitle">
              <div className="left">
                <AiOutlineShopping />
                <h5>Products</h5>
              </div>
              <div className="right">
                <BsBagPlus />
                <h5> Add New Product</h5>
              </div>
            </div>
            <div className="orderLisst">
              <Table>
                <tbody className="ordersTable">
                  <tr>
                    <td>Total</td>
                    <td>{totall}</td>
                  </tr>

                  <tr>
                    <td>Live</td>
                    <td>{complete}</td>
                  </tr>

                  <tr>
                    <td>Offline</td>
                    <td>{pending}</td>
                  </tr>

                  <tr>
                    <td>Pending Review</td>
                    <td>{processing}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.user,
  };
};

export default connect(mapStateToProps)(DashBoardMain);
