import Product from "./Product";
import {Modal, ModalHeader, ModalBody, Container, Row,Col,Button} from "reactstrap"
import "../../assets/scss/addtocart.scss"
import "../../assets/scss/modal.scss"
import { connect } from "react-redux";
import { addToCart } from "../../store/action/shoppingAction/shopping-action";



const ProductsItems = ({allProduct,isFalse,showDetails,shopDetails,addToCart}) => {

    return (
        <>
         {allProduct.map((item, index) => {
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
        >
           <ModalHeader  toggle={showDetails}/>
            <ModalBody>
                <Container fluid>
                      {shopDetails.map((item) => {
                          return ( 
                            <Row>
                              <Col className="col-lg-5 col-sm-12 col-12">
                              <img src={item.img} alt={item.title} />
                            </Col>
                            <Col className="col-lg-7 mb-5 col-sm-12 col-12">
                              <h2>{item.title}</h2>
                              <span>{item.pc} pc(s)</span>
                              <p className="mt-3">{item.desc}</p>
                              <h3 className="color_theme my-3">${item.price}</h3>
                              <Button onClick={() => addToCart(item.id)} className="bg_color my-5" size="lg">Add To Cart</Button>

                              <br />
                              <span className="categories">
                                Categories
                                <span className="rounded">{item.catagorie}</span>
                                </span>
                            </Col>
                            <hr className="my-4"/>
                            <Col className="col-12 mt-4">
                              <h5 className="font-bold">Details</h5>
                              <p>{item.desc}</p>
                            </Col>
                            <hr className="my-4"/>
                            
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
  const {products, allProduct,shopDetails,isFalse} = state.shop
  return {
    allProduct : allProduct.length === 0 ? products : allProduct,
    isFalse : isFalse,
    shopDetails : shopDetails,

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
    showDetails : (id) => dispatch(showDetails(id)),
    addToCart : (id) => dispatch(addToCart(id))
}
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductsItems);