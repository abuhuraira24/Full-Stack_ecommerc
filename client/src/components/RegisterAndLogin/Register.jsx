import React from 'react';

import { Toaster } from 'react-hot-toast';

import {Container, Row, Col, Form, Button,Collapse} from "react-bootstrap"

import {Link} from "react-router-dom"

import {connect} from "react-redux"

import {register} from '../../store/action/authAction/authAction';




class Register extends React.Component {
    state = {
        name : "",
        email : "",
        password : "",
        error : {},
        firstName : "",
        lastName : "",
        shopName : "",
        phoneNumber : ""
    }

    static getDerivedStateFromProps(nextProps, prevProps){
        
        if(JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevProps.error)){
           return nextProps.auth
        }
        return null
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value,
            error : this.props.auth.error
        })
    }

    submitHandler = e => {
        const {email, password, firstName,lastName,shopName,phoneNumber} = this.state
        e.preventDefault()
        this.props.register({email,password,firstName,lastName,shopName,phoneNumber},this.props.history)
    }

    render() {
        const { email, password,error, phoneNumber,shopName,firstName,lastName} = this.state

        
        return (
            <>
             <div className="register">
                    <div className="routerDir text-center  py-5">
                        <h4 className='color_theme'> <Link to="/">HOME</Link> / REGISTER</h4>
                 </div>;
             </div>
             <div className="registerbg">
             <Container>
                     <Row>
                         <Col className='col-md-8 offset-md-4 m-auto'>
                             <div className="userTitle">
                                 <h4  className='color_theme'>Register Here</h4>
                             </div>
                            <Form onSubmit={this.submitHandler} className='formStyle'>
              
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Control  
                                    className={
                                        error.email ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="email" 
                                    placeholder="Enter Email" 
                                    name="email"
                                    value={email}
                                    onChange={this.changeHandler}
                                    />
                                     <p className='error'>{error.email}</p>
                                     <p className='error'>{error.message}</p>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control 
                                    className={
                                        error.password ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="password" 
                                    placeholder="Password" 
                                    name="password"
                                    value={password}
                                    onChange={this.changeHandler}
                                    />
                                    <p className='error'>{error.password}</p>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control 
                                    className={
                                        error.firstName ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstName"
                                    value={firstName}
                                    onChange={this.changeHandler}
                                    />
                                    <p className='error'>{error.firstName}</p>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control 
                                    className={
                                        error.lastName ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="lastName"
                                    value={lastName}
                                    onChange={this.changeHandler}
                                    />
                                    <p className='error'>{error.lastName}</p>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control 
                                    className={
                                        error.shopName ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="text" 
                                    placeholder="Shop Name" 
                                    name="shopName"
                                    value={shopName}
                                    onChange={this.changeHandler}
                                    />
                                    <p className='error'>{error.shopName}</p>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Control 
                                    className={
                                        error.phoneNumber ? "form-control is-invalid py-3" : "form-control py-3"
                                        }
                                    type="text" 
                                    placeholder="Phone Number" 
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={this.changeHandler}
                                    />
                                    <p className='error'>{error.phoneNumber}</p>
                                </Form.Group>

                                <Button className='btn-submit' type="submit">
                                    Register
                                </Button>
                                <Link to="/login">Have An Account? Login Here</Link>
                            </Form>
                         </Col>
                     </Row>
             </Container>
             </div>
             <Toaster 
               position="bottom-right"
               reverseOrder={false}
               toastOptions={{
                className: '',
                style: {
                  padding: '16px',
                  color: '#000',
                  fontSize : '1.4rem'
                },
              }} 
               />
            </>
        )
    }
}

const mapStateToProps = state => {

    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, {register})(Register);