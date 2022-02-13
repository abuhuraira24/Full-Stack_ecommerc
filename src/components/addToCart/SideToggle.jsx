import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";
import AddToCartBody from "./AddToCartBody";
import AddToCartButton from "./AddToCartButton";
import { Navbar, Container, Offcanvas } from "react-bootstrap";

const SideToggle = ({ cart }) => {
  console.log(cart);
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

  const iscarted = cart.length > 0;

  return (
    <>
      <Navbar bg="light" className="bg_color rounded" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
              <span className="text-light mb-2">
              <FaShoppingCart /> {cartCount} items
              </span>
              <span className="totallPrices rounded">
                ${totalPrice}
              </span>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
              <span className="my-3 ">
                <FaShoppingCart className="color_theme" />
                <span className="color_theme ms-3 fs-5 text">
                  {cartCount} items
                </span>
              </span>
              </Offcanvas.Title>
              
            </Offcanvas.Header>
            <Offcanvas.Body>
            {iscarted ? <AddToCartBody>
                      {cart.map((item, index) => {
                          return (
                          <SingleItem key={index} cartData={item} />
                          )
                      })}
                 </AddToCartBody> : <AddToCartBody className={iscarted ? "" : "emptyCart"}>
                  <FaShoppingCart className="color_theme"/>
                  <h4>No products found</h4>
                 </AddToCartBody>}
            </Offcanvas.Body>
            <Offcanvas.Header>
                  <AddToCartButton />
            </Offcanvas.Header>
          </Navbar.Offcanvas>
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

export default connect(mapStateToProps)(SideToggle);
