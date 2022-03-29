import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";

import {Modal, ModalHeader, ModalBody, Container,Button, Row,Col} from "reactstrap"
import "../../assets/scss/addtocart.scss"
import "../../assets/scss/modal.scss"
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, product_request,product_data_success,increment, decrement } from "../../store/action/shoppingAction/shopping-action";


const ProductsItems = ({cart,isFalse,showDetails,shopDetails,addToCart,data,loading,reletedShop,filter}) => {
  
  const dispatch = useDispatch()
  const fetch_product = async () => {
      
      dispatch(product_request())
   
    axios
    .get(
      "https://mocki.io/v1/308c57af-6653-48ef-99b0-30b4ebdb1923"
    )
    .then((res) => {
    
      dispatch(product_data_success(res.data))
    })
    .catch((error) => {
      console.log(error)
    })
   
  };
  
  

  useEffect(() => {
    fetch_product()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  

  const filterItems = () => {
    if(filter === "all"){
      return data
   }else{
    const filtered = data.filter((item) => item.category === filter )
    return filtered
   }
  }

    return (
        <>
         {filterItems().map((item, index) => {
           return (
            <Col  key={index} className="col-xl-3 col-md-4 col-lg-3 col-sm-6 col-12">
               <Product  productData={item} />
            </Col>
           )
         })}
      <Modal 
          isOpen={isFalse}
          toggle={showDetails}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="border-0"
        >
           <ModalHeader className="border-0"  toggle={showDetails}/>
            <ModalBody>
                <Container fluid>
                      {shopDetails.map((item, index) => {
                        
                          return ( 
                            <Row key={index}>
                              <Col className="col-lg-5 col-sm-12 col-12">
                              <img  src={item.img} alt={item.title} />
                            </Col>
                            <Col className="col-lg-7 mb-5 col-sm-12 col-12">
                              <h2>{item.title}</h2>
                              <span>{item.pc} pc(s)</span>
                              <p className="mt-3">{item.desc}</p>
                              <h3 className="color_theme my-3">${item.price}</h3>
                              <div className="incrementValue">
     
                              </div>
                              <Button onClick={() => addToCart(item.id)} className="bg_color my-5" size="lg">Add To Cart</Button>

                              <br />
                              <span className="categories">
                                Categories
                                <span className="rounded">{item.category}</span>
                                </span>
                            </Col>
                            <hr className="my-4"/>
                            <Col className="col-12 mt-4">
                              <h5 className="font-bold">Details</h5>
                              <p>{item.desc}</p>
                            </Col>
                            {/* <hr className="my-4"/> */}
                            
                            </Row>
                          ) 
                          })}

                  
                </Container>
            </ModalBody>
        </Modal>
        </>
    );
}

const mapStateToProps = (state) => {
  const {shopDetails,isFalse} = state.shop
  return {
    isFalse : isFalse,
    shopDetails : shopDetails,
    data : state.shop.data,
    cart : state.shop.cart,
    loading : state.shop.loading,
    reletedShop : state.shop.reletedShop,
    filter : state.shop.filter

  }
}


const showDetails = (id) => ({
  type : "SHOW_SHOP",
  payload : {
      id : id
  }
})

// dispatch
const mapDispatchToProps = dispatch => {
return {
    showDetails : (id) => dispatch(showDetails(id)),
    addToCart : (id) => dispatch(addToCart(id)),
    increment : (id) => dispatch(increment(id)),
    decrement : (id) => decrement(decrement(id))
}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductsItems);

