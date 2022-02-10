import {Button} from "reactstrap"
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const AddToCartButton = ({cart}) => {

   const [totalPrice, setTotalPrice] = useState("00.00")

   useEffect(() => {
      let price = 0;
      cart.forEach(item => {
         price += item.qty * item.price
      });
      setTotalPrice(price)
   }, [cart,totalPrice,setTotalPrice])


    return (
     
          <div className="itemBottom px-4">
            <div className="d-grid gap-2">
                 <Button className="bg_color d-flex align-items-center justify-content-between pill" size="lg">
                    <span>Checkout</span>
                    <span className="tottalPrice">${totalPrice}</span>
                 </Button>
            </div>
         </div>
      
    );
}
const mapStateToProps = state => {
   return {
      cart : state.shop.cart
   }
}

export default connect(mapStateToProps)(AddToCartButton);