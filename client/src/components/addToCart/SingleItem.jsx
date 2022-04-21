import { AiOutlineCloseCircle as Close } from "react-icons/ai";
import { increment, decrement, removeFromCart, totalPrices } from "../../store/action/shoppingAction/shopping-action";
import { connect } from "react-redux";
import "../../assets/scss/addtocart.scss"
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { BsTrash } from "react-icons/bs";


const SingleItem = ({cartData,updateItemQuantity,removeItem}) => {


    return (
        <div className="d-flex justify-content-between cartItem border-bottom p-3">
            <div className="d-flex justify-content-start align-items-center">
              <div className="increOrDec">
                  <button 
                  onClick={() => updateItemQuantity(cartData.id, cartData.quantity + 1)}
                  >
                      +
                  </button>
                  <span>
                      {cartData.quantity}
                  </span>
                  <button 
                //   disabled={cartData.qty <= 1 ? true : false} 
                onClick={() => updateItemQuantity(cartData.id, cartData.quantity - 1)}
                  
                  >
                    -
                  </button>
              </div>
              <div className="itemImage ms-3">
                 <img src={require(`../../assets/images/${cartData.avatar}`)} width="100%" alt="" />
              </div>
              <div className="title_price ms-3">
                  <h3 className="fs-6 text">{cartData.title}</h3>
                  <span className="color_theme fs-7 text">${cartData.price * cartData.quantity}</span>
                  <span className="qty">{cartData.quantity} X {cartData.qty}</span>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <span className="fs-7 text"></span>
             <button  onClick={() => removeItem(cartData.id)} className="fs-3 text ms-3">
                <BsTrash  className="closeBtn"/>
             </button>
             <Toaster   
                    position="bottom-left"
                    reverseOrder={true}
                    toastOptions={{
                        className: '',
                        style: {
                          padding: '16px',
                          color: '#000',
                          fontSize : '1.4rem'
                        },
                      }} 
                    
                    />
            </div>
        </div>
    );
}

const mapDispatchToprops = (dispatch) => {
    return {
        removeFromCart : (id) => dispatch(removeFromCart(id)),
        increment : (id) => dispatch(increment(id)),
        decrement : (id) => dispatch(decrement(id)),
        totalPrices : (price) => dispatch(totalPrices(price))
    }
}
const mapStateToProps = (state) => {
    return {
        cart : state.shop.cart,
    }
}


export default connect(mapStateToProps,mapDispatchToprops)(SingleItem);