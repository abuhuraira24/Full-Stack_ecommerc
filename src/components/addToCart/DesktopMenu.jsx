import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { Navbar, Container } from "react-bootstrap";
import ToggleMenu from "../ToggleMenu";


const DesktopMenu = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    let count = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      count += item.qty;
      totalPrice += item.qty * item.price
    });
    setCartCount(count);
    setTotalPrice(totalPrice)
  }, [cart, cartCount]);

  return (
    <>
      <Navbar bg="light" className="bg_color rounded desktopMenu" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
              <span className="text-light mb-2">
              <FaShoppingCart /> {cartCount} items
              </span>
              <span className="totallPrices rounded">
                ${totalPrice}
              </span>
          </Navbar.Toggle>

          <ToggleMenu />
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(DesktopMenu);
