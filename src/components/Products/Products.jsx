import Product from "./Product";
import {Col} from "reactstrap"
import { connect } from "react-redux";



const ProductsItems = ({allProduct}) => {

    return (
        <>
         {allProduct.map((item, index) => {
           return (
            <Col  key={index} className="col-xl-2 col-md-4 col-lg-3 col-sm-6 col-12">
               <Product productData={item} />
            </Col>
           )
         })}
        </>
    );
}

const mapStateToProps = (state) => {
  const {products, allProduct} = state.shop
  return {
    allProduct : allProduct.length === 0 ? products : allProduct,
  }
}

export default connect(mapStateToProps)(ProductsItems);