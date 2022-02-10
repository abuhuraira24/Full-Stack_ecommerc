import Product from "./Product";
import {Col} from "reactstrap"
import { connect } from "react-redux";



const ProductsItems = ({products}) => {


    return (
        <>
         {products.map((item, index) => {
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

  return {
    products : state.shop.products
  }
}

export default connect(mapStateToProps)(ProductsItems);