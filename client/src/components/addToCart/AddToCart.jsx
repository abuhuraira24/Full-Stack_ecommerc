import "../../assets/scss/addtocart.scss"
import AddToCartTitle from "./AddToCartTitle";
import SingleItem from "./SingleItem";
import AddToCartBody from "./AddToCartBody";
import AddToButton from "../../components/addToCart/AddToCartButton"
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {useCart } from "react-use-cart";

const AddToCart = ({cart}) => {


    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
      const iscarted = items.length > 0;
      console.log(iscarted)
    return (
        <>
         <div id="modal" className="addToPopup popup hidden">
            <div className="addToCartItems">
                <AddToCartTitle />
                  {/* {iscarted ? <AddToCartBody>
                      {items.map((item, index) => {
                          return (
                          <SingleItem key={index} cartData={item} />
                          )
                      })}
                 </AddToCartBody> : <AddToCartBody className={iscarted ? "" : "emptyCart"}>
                  <FaShoppingCart className="color_theme"/>
                  <h4>No products found</h4>
                 </AddToCartBody>}
                 <AddToButton /> */}
                 {/* <AddToCartBody>
                      {items.map((item, index) => {
                          return (
                          <SingleItem key={index} cartData={item} />
                          )
                      })}
                 </AddToCartBody> */}
            </div>
         </div>
        </>
    );
}
const mapStateToProps = (state) => {

  return {
      cart : state.shop.cart
  }
}
 
export default connect(mapStateToProps)(AddToCart);