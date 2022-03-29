import {CardGroup, Card, CardImg, CardBody, CardTitle,CardSubtitle,Button} from "reactstrap"
import '../../assets/scss/shopping.scss'
import "../../assets/scss/Shopping-details.scss"
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { addToCart } from "../../store/action/shoppingAction/shopping-action";
import Skeleton from "react-loading-skeleton";
import { Toaster } from 'react-hot-toast';

const Product = ({productData,addToCart, cart,showDetails,loading}) => {
    
   
    const iscart = cart.find((item) => productData.id === item.id ? true : false)


    return (
        <>
       <CardGroup>
            <Card>

                {loading ? <Skeleton height={200} highlightColor="#fff"/> : <CardImg
                alt="Card image cap"
                src={productData.img}
                top
                width="100%"
                role="button"
                onClick={() => showDetails(productData.id)}
                />}
                <span className="discount"> {productData.discount}% </span>
               
                <CardBody>
                <CardTitle 
                 tag="h6" 
                 className="mt-3"
                 role="button"
                 onClick={() => showDetails(productData.id)}
                 
                 >
                    {/* {productData.title} */}
                    {loading ? <Skeleton highlightColor="#fff" height={15}/> : <> {productData.title}</>}
                </CardTitle>
                <CardSubtitle
                  className="mb-4 text-muted"
                  tag="h6"

                >
                   {/* {productData.pc} pc(s) */}
                   {loading ? <Skeleton highlightColor="#fff" height={15}/> : <> {productData.pc} pc(s)</>}
                </CardSubtitle>
        
                <div className="action d-flex justify-content-between align-items-center">
                   
                    {loading ? <Skeleton highlightColor="#fff" width={50} height={20}/> : <> <span className="color_theme">${productData.price}</span></>}
                    {loading ? <Skeleton highlightColor="#fff" width={50} height={20}/> : (<Button id={iscart ? "bg_color" : null} onClick={() => addToCart(productData.id)} className="btn_theme addToCart color_theme d-flex justify-content-between align-items-center" >
                       <FaShoppingCart className="mr-4"/>
                        Cart
                    </Button>)}
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