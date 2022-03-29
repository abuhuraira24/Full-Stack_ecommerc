import React from "react";

import { connect } from "react-redux";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";

import Register from "./components/RegisterAndLogin/Register";

import Layout from "./components/Layout";

import Login from "./components/RegisterAndLogin/Login";

import Dashboard from "./components/dashboard/Dashboard";

import Product from "./components/dashboard/product/Product";

import Setting from "./components/dashboard/setting/Setting";
import AddNewProduct from "./components/dashboard/product/AddNewProduct";

class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.login;

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route exact path="/register" component={Register} />

            <Route exact path="/login">
              {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
            </Route>

            <Route exact path="/dashboard">
              {isAuthenticated ? <Dashboard /> : <Login />}
            </Route>

            <Route exact path="/dashboard/product">
              {isAuthenticated ? <Product /> : <Login />}
            </Route>

            <Route exact path="/dashboard/setting">
              {isAuthenticated ? <Setting /> : <Login />}
            </Route>

            <Route exact path="/dashboard/addnewproduct">
              {isAuthenticated ? <AddNewProduct /> : <Login />}
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(App);
