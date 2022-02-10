import {CardGroup, Card, CardImg, CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import '../../assets/scss/shopping.scss'
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { addToCart } from "../../store/action/shoppingAction/shopping-action";

const Product = ({productData,addToCart, }) => {
    

    return (
        <>
        <CardGroup>
           <Card>
                <CardImg
                alt="Card image cap"
                src={productData.img}
                top
                width="100%"
                className="mt-3"
                />
                <CardBody>
                <CardTitle tag="h6" className="mt-3">
                    {productData.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-4 text-muted"
                    tag="h6"
                >
                   {productData.pc} pc(s)
                </CardSubtitle>
        
                <div className="action d-flex justify-content-between align-items-center">
                    <span className="color_theme">${productData.price}</span>
                    <Button onClick={() => addToCart(productData.id)} className="btn_theme color_theme d-flex justify-content-between align-items-center" >
                       <FaShoppingCart className="mr-4"/>
                        Cart
                    </Button>
                </div>
                </CardBody>
           </Card>
        </CardGroup>
        </>
    );
}



const mapStateToProps = (state) => {

    return {
      cart : state.shop.cart
    }
  }
  
const mapDispatchToProps = dispatch => {

    return {
        addToCart : (id) => dispatch(addToCart(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Product);