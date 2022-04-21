import {CardGroup, Card, CardImg, CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import '../../assets/scss/shopping.scss'
import "../../assets/scss/Shopping-details.scss"
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { addToCart } from "../../store/action/shoppingAction/shopping-action";
import {useCart } from "react-use-cart";
import { Toaster } from 'react-hot-toast';

const Product = ({productData}) => {

    const { addItem } = useCart();

    let newData = {}
    newData.id = productData._id
    newData.author = productData.author
    newData.avatar = productData.avatar
    newData.categorie = productData.categorie
    newData.desc = productData.desc
    newData.discount = productData.discount
    newData.pending = productData.pending
    newData.pendingReview = productData.pendingReview
    newData.price = productData.price
    newData.productName = productData.productName
    newData.sortDesc = productData.sortDesc


  
    return (
        <>
       <CardGroup>
            <Card>

               <CardImg
                alt="Card image cap"
                src={require(`../../../src/assets/images/${productData.avatar}`)}
                top
                width="100%"
                role="button"
               
                />
                <span className="discount">{productData.discount}% </span>
               
                <CardBody>
                <CardTitle 
                 tag="h6" 
                 className="mt-3"
                 role="button"
                 >
                    {productData.productName}
                  
                </CardTitle>
                <CardSubtitle
                  className="mb-4 text-muted"
                  tag="h6"

                >
                   {/* {productData.pc} pc(s) */}
                   <span>0pc</span>
                </CardSubtitle>
        
                <div className="action d-flex justify-content-between align-items-center">
                   
                    <> <span className="color_theme">${productData.price}</span></>
                    <Button onClick={() => addItem(newData)} className="btn_theme addToCart color_theme d-flex justify-content-between align-items-center" >
                       <FaShoppingCart className="mr-4"/>
                        Cart
                    </Button>
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
                </CardBody>
           </Card>

        </CardGroup>

        </>
    );
}



const mapStateToProps = (state) => {
    return {
      cart : state.shop.cart,
      isFalse : state.shop.isFalse,
      loading : state.shop.loading
    }
  }
  

const showDetails = (id) => ({
  
    type : "SHOW_SHOP",
    payload : {
        id : id
    }
  })
const mapDispatchToProps = dispatch => {

    return {
        addToCart : (id) => dispatch(addToCart(id)),
        showDetails : (id) => dispatch(showDetails(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Product);