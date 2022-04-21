import React from 'react';
import { Col, Container, Row,Table, Button } from 'react-bootstrap';

import SideBarMenu from '../SideBarMenu';

import { Link } from 'react-router-dom';

import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

import {connect} from "react-redux"


import {getAllProduct,deleteProduct} from "../../../store/action/newProductAction/newProductAction"

class Product extends React.Component {
    state = {
        path : __dirname + `../../`
    }
    componentDidMount(){
        this.props.getAllProduct(this.props.login._id)

    }
   emptyProduct = () => {
       if(this.props.getProduct.length === 0){
           return "Product Not Found!"
       }
   }
    render() {
        const Products = this.props.getProduct
       
        return <div className='dashpage d-flex'>
            <SideBarMenu activeKey="0" />
            <div className='dashboardMain'>
                <Container>
                    <Row>
                        <Col>
                        <div className="productSeacr">
                        <h3>Products</h3>
                        <input type="text" placeholder='Seach Your product Name' />
                        </div>

                        <div className="products mt-4">
                        <Table borderless hover>
                            <thead>
                                <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th width="92">Shop</th>
                                <th>Unit/Price</th>
                                <th width="110">Status</th>
                                <th width="110">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                             <h4 className='notFoundProduct'>{this.emptyProduct()}</h4>
                              {Products?.map((item, index) => {
                                    return (
                                        <tr>
                                            <td colSpan={1} className='sortImg' width="100">
                                             <img src={require(`../../../assets/images/${item.avatar}`)} alt="img" />
                                             
                                            </td>
                                            <td>
                                                <span className='productName' >{item.productName}</span>
                                            </td>
                                            <td width="200">
                                            <span className='productName'>{this.props.login.shopName}</span>
                                            </td>
                                            <td>
                                            <span className='productName'>
                                                ${item.price}
                                            </span>
                                            </td>
                                            <td>
                                            <span className='productName'>
                                                {!item.pending ? (<Button disabled className='btn btn-danger rounded-pill text-light'>Pending</Button>) : (<Button className='rounded-pill text-light 
                                                disabled
                                                bg_color'>Published</Button>)}
                                            </span>
                                            </td>
                                            <td>
                                            <span className='productName'>
                                                 {this.props.loading ? 'loading' : (
                                                     <button onClick={() => this.props.deleteProduct(item._id)}>
                                                     <AiOutlineDelete fontSize="22" title='Delete' className='me-2' color='red' />
                                                     </button>
                                                 )}
                                              
                                                   <button onClick={() => this.props.getEditProduct(item._id)}> 
                                                       <AiFillEdit fontSize="22" title='Edit' color='rgb(133 128 128)' />
                                                   </button>
                                               
                                            </span>
                                            </td>
                                       </tr>
                                    )
                              })}
                            </tbody>
                        </Table>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>;
    }
}

const mapStateToProps = state => {

    return {
        login : state.login.user,
        getProduct : state.getAllProduct.products,
        loading : state.getAllProduct.loading
    }
}

const mapDispatchToProps = dispatch => {

    return {
        getAllProduct : (id) => dispatch(getAllProduct(id)),
        deleteProduct : (id) => dispatch(deleteProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);