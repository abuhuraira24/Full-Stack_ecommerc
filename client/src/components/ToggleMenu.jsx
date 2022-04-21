import { Navbar, Offcanvas } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddToCartButton from "./addToCart/AddToCartButton";
import AddToCartBody from "./addToCart/AddToCartBody";
import SingleItem from "./addToCart/SingleItem";
import {useCart } from "react-use-cart";

const ToggleMenu = ({cart}) => {

    let [cartCount, setCartCount] = useState(0);
   

    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
    
    const iscarted = items.length > 0;

    return (
        <>
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
                  {totalUniqueItems} items
                </span>
              </span>
              </Offcanvas.Title>
              
            </Offcanvas.Header>
            <Offcanvas.Body>
            {iscarted ? <AddToCartBody>
                      {items.map((item, index) => {

                          return (
                          <SingleItem 
                          key={index} 
                          cartData={item}
                          removeItem={removeItem} 
                          updateItemQuantity={updateItemQuantity}
                          />
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
        </>
    );
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
export default connect(mapStateToProps)(ToggleMenu);