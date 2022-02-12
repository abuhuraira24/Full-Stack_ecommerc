import "../../assets/scss/addtocart.scss"
import AddToCartTitle from "./AddToCartTitle";
import SingleItem from "./SingleItem";
import AddToCartBody from "./AddToCartBody";
import AddToButton from "../../components/addToCart/AddToCartButton"
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";


const AddToCart = ({cart}) => {


    // {cart.map((item, index) => {
    //     return (
    //      <SingleItem key={index} cartData={item} />
    //     )
    // })}

    const iscarted = cart.length > 0;
   
    return (
        <>
         <div id="modal" className="addToPopup popup hidden">
            <div className="addToCartItems">
                <AddToCartTitle />
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
                 <AddToButton />
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