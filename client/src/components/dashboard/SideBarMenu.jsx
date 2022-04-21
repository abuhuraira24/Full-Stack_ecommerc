
import React from 'react';

import {connect} from "react-redux"

import {logout} from "../../store/action/authAction/authAction"

import {Container, Row, Col,Accordion} from "react-bootstrap"

import dash from "../../assets/images/dash.png"

import {NavLink, Link} from "react-router-dom"

import shutdown from "../../assets/images/shutdown.png"

import user from "../../assets/images/useredit.png"

import settings from "../../assets/images/settings.png";


class SideBarMenu extends React.Component {


    render() {
       
        const {shopName} = this.props.login
     
        return <div className="dashboardMenu">
            <Container>
                   <Row>
                       <Col>
                           <div className="siderbar">
                              <div className="header">
                                  <Link to="/dashboard">
                                    <div className="logo">
                                        <img src={dash} alt="dash" />
                                    </div>
                                  
                                  <div className="tittle">
                                  <h3>{shopName}</h3>
                                  </div>
                                  </Link>
                              </div>
                              <div className="headerbody">
                      
                            <Accordion defaultActiveKey={this.props.activeKey}>
                                <Accordion.Item eventKey="0">
                                <Accordion.Header>Products</Accordion.Header>
                                        <Accordion.Body>
                                          <NavLink
                                                className="d-block"
                                                exact
                                                to="/dashboard/product"
                                                style={{
                                                    marginBottom : "1rem",
                                                }}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#103178",
                                                    display: "block",
                                                    
                                                }}
                                                >  
                                               Products
                                            </NavLink>
                                                <NavLink
                                                className="d-block"
                                                exact
                                                to="/dashboard/addnewproduct"
                                                style={{
                                                    marginBottom : "1rem",
                                                }}
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#103178",
                                                    display: "block",
                                                    
                                                }}
                                                >    
                                                Add New Product
                                            </NavLink>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Tools</Accordion.Header>
                                    <Accordion.Body>
                                    <NavLink
                                   
                                  activeStyle={{
                                    fontWeight: "bold",
                                    color: "#103178",
                                    display: "block",
                                   
                                  }}
                                   className="d-block mb-2"
                                   exact 
                                   to="/dashboard/setting"
                                   >
                                       Setting
                                   </NavLink>
                                   
                                    </Accordion.Body>
                                </Accordion.Item>
                           </Accordion>
                              </div>
                              <div className="headerfooter">
                                  <ul>
                                      <li>
                                          <img src={settings} alt="settings" />
                                      </li>
                                      <li>
                                         <img src={user} alt="user" />
                                      </li>
                                      <li>
                                        <button onClick={() => this.props.logout(this.props.history)}>
                                        <img src={shutdown} alt="shutdown" />
                                        </button>
                                      </li>
                                  </ul>
                              </div>
                           </div>
                       </Col>
                   </Row>
               </Container>
        </div>;
    }
}

const mapStateToProps = state => {

    return {
        login : state.login.user
    }
}

export default connect(mapStateToProps, {logout})(SideBarMenu);