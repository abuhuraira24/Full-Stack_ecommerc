import {useEffect, useState} from "react"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { connect } from "react-redux";


const AddToCartTitle = ({cart}) => {

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty
      })
      setCartCount(count)
    }, [cart, cartCount])

    const hide = () => {
        const body = document.querySelector("body")
        const modal = document.querySelector("#modal");
              modal.classList.toggle("hidden")
              body.style.overflow = "auto"
    }
    return (
        <div className="addToTitle d-flex justify-content-between p-3 border-bottom">
            <span className="my-3 ">
              <FaShoppingCart className="color_theme" />
               <span className="color_theme ms-3 fs-5 text">{cartCount} items</span>
            </span>
            <button onClick={() => hide()}>
             <AiOutlineCloseCircle />
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
      cart : state.shop.cart
    }
  }
  

export default connect(mapStateToProps)(AddToCartTitle);