import {Button} from "reactstrap"
import { FaShoppingCart } from "react-icons/fa";
import React, {useState, useEffect} from "react";
import ModalAddToCart from "./ModalAddToCart";
import { connect,  } from "react-redux";

const AddToItems = ({cart}) =>   {

      const [cartCount, setCartCount] = useState(0)
      const [totalPrice, setTotalPrice] = useState(0)
        
      useEffect(() => {
        let count = 0;
        let totalPrice = 0;

        cart.forEach((item) => {
          count += item.qty
          totalPrice += item.qty * item.price
        })
        setCartCount(count)
        setTotalPrice(totalPrice)
      }, [cart, cartCount,setCartCount,totalPrice,setTotalPrice])
     
    const showModal = function (e) {
      const modal = document.querySelector("#modal");
      const body = document.querySelector("body");
      modal.classList.toggle("hidden")
      if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
          } else {
              // Enable scroll
              body.style.overflow = "auto";
          }
    }

  return (
    <>
        <div className="addtoUtems">
          <Button className="bg_color" onClick={() => showModal()}>
          <span>
          <FaShoppingCart /> {cartCount} items
          </span>
          <span className="totallPrices">
            ${totalPrice}
          </span>
          </Button>
        </div>
      <ModalAddToCart />
    </>
  );
  
}

const mapStateToProps = (state) => {

  return {
    cart : state.shop.cart
  }
}

export default connect(mapStateToProps)(AddToItems);