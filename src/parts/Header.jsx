import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import BottomSticky from "../components/BottomSticky";
import { handleSearch } from "../store/action/shoppingAction/shopping-action";

import "../assets/scss/header.scss";

// React icons

import { FaBeer } from "react-icons/fa";

const Header = ({ handleSearch, searchTerm }) => {
  return (
    <>
      <Navbar fixed="top" className="bg_color">
        <Container fluid>
          <Navbar.Brand>
            FooDex <span>.</span>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-2">
              <NavDropdown
                className="text-light"
                title="Furniture"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <FaBeer /> Grocery
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <FaBeer />
                  Bakery
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <FaBeer />
                  Bags
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  <FaBeer />
                  Clothing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <FaBeer />
                  Furniture
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <FaBeer />
                  Daily Needs
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="ms-4 me-4 py-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form>

            <div className="menu d-flex justify-content-end">
              <ul className="d-flex">
                <li>
                  <Link to="/">Shops</Link>
                </li>
                <li>
                  <Link to="/">Offers</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">CONTACT</Link>
                </li>
              </ul>
              <div className="d-flex aligh-items-center">
                <span className="d-inline-block account">
                  <FaUserCircle />
                </span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BottomSticky />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.shop.searchTerm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (val) => dispatch(handleSearch(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
