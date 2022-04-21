import React, { componentDidMount } from "react";

import { connect } from "react-redux";

import { Table } from "react-bootstrap";

import { AiOutlineShopping } from "react-icons/ai";

import { BsBagPlus } from "react-icons/bs";

import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

class DashBoardMain extends React.Component {
  state = {
    notify: true,
  };

  render() {
    const {
      cancelled,
      earning,
      order,
      sales,
      totall,
      complete,
      pending,
      processing,
      pendingNumber,
    } = this.props.getUserData;

    return (
      <div className="dashboardMain">
        <div className="mainside">
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
                    <td>0</td>
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

                <Link to="dashboard/addnewproduct">
                  <h5> Add New Product</h5>
                </Link>
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
                    <td>
                      <Link to="dashboard/product" style={{ color: "#363434" }}>
                        Pending Review
                      </Link>
                    </td>

                    <td>
                      <Link to="dashboard/product">{pendingNumber}</Link>
                    </td>
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
    getUserData: state.getUserData.userData,
  };
};

export default connect(mapStateToProps)(DashBoardMain);
