import { AiOutlineCloseCircle as Close } from "react-icons/ai";
import { increment, decrement, removeFromCart } from "../../store/action/shoppingAction/shopping-action";
import { connect } from "react-redux";
import "../../assets/scss/addtocart.scss"
const SingleItem = ({cartData,removeFromCart,increment,decrement}) => {
   


    return (
        <div className="d-flex justify-content-between cartItem border-bottom p-3">
            <div className="d-flex justify-content-start align-items-center">
              <div className="increOrDec">
                  <button onClick={() => increment(cartData.id)}>
                      +
                  </button>
                  <span>
                      {cartData.qty}
                  </span>
                  <button disabled={cartData.qty <= 1 ? true : false} onClick={() => decrement(cartData.id)}>
                    -
                  </button>
              </div>
              <div className="itemImage ms-3">
                 <img src={cartData.img} width="100%" alt="" />
              </div>
              <div className="title_price ms-3">
                  <h3 className="fs-6 text">{cartData.title}</h3>
                  <span className="color_theme fs-7 text">${cartData.price}</span>
                  <span className="qty">1 X {cartData.qty}</span>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <span className="fs-7 text">$2.00</span>
             <button onClick={() => removeFromCart(cartData.id)} className="fs-3 text ms-3">
                <Close  className="closeBtn"/>
             </button>
            </div>
        </div>
    );
}

const mapDispatchToprops = (dispatch) => {
    return {
        removeFromCart : (id) => dispatch(removeFromCart(id)),
        increment : (id) => dispatch(increment(id)),
        decrement : (id) => dispatch(decrement(id))
    }
}
const mapStateToProps = (state) => {
    return {
        cart : state.shop.cart,
    }
}


export default connect(mapStateToProps,mapDispatchToprops)(SingleItem);