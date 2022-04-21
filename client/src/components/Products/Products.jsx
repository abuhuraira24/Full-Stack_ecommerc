import Product from "./Product";

import {Modal, ModalHeader, ModalBody, Container,Button, Row,Col} from "reactstrap"
import "../../assets/scss/addtocart.scss"
import "../../assets/scss/modal.scss"
import { connect } from "react-redux";



const ProductsItems = ({isFalse,showDetails,shopDetails,publishedProducta}) => {
  


  
    return (
        <>
        
            {publishedProducta.length > 0 && publishedProducta?.map((itm, index) => {
              return (
                <Col className="col-xl-3 col-md-4 col-lg-3 col-sm-6 col-12">
                  <Product productData={itm} />
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
                              <Button className="bg_color my-5" size="lg">Add To Cart</Button>

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
    filter : state.shop.filter,
    publishedProducta : state.shop.publishedProducta
  }
}



export default connect(mapStateToProps)(ProductsItems);


