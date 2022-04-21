import { Container, Row } from "reactstrap";

import React from "react";
import {connect} from "react-redux"

import {publishedProducts} from "../store/action/shoppingAction/shopping-action"
import Products from "./Products/Products";
import DesktopMenu from "./addToCart/DesktopMenu";


class ProductSection extends React.Component {
    componentDidMount(){
        this.props.publishedProduct()
    }
    render(){
        return (
           <>
           <DesktopMenu />
            <Container id="products" fluid className="pt-3  mb_100">
                <Row>
                  <Products />
                </Row>
            </Container>
           </>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        publishedProduct : () => dispatch(publishedProducts())
    }
}

export default connect(null,mapDispatchToProps)(ProductSection);