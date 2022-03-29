import React from 'react';

import {Container, Row, Col, Form, Button} from "react-bootstrap"

import {Link} from "react-router-dom"

import {login} from "../../store/action/authAction/authAction"

import {connect} from "react-redux"

class Login extends React.Component {

    state = {
        email : "",
        password : "",
        error : {}
    }

    static getDerivedStateFromProps(nextProps, prevProps){
        
        if(JSON.stringify(nextProps.authLogin) !== JSON.stringify(prevProps.error)){
           return nextProps.authLogin
        }
        return null
    }
    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value,
            error : this.props.authLogin
        })
    }
    submitHandler = e => {
        const {email, password} = this.state
        e.preventDefault()

        this.props.login({email, password}, this.props.history)

    }

    render() {
        const {email, password, error} = this.state

        return (
            <>
             <div className="register">
                    <div className="routerDir text-center  py-5">
                        <h4 className='color_theme'> <Link to="/">HOME</Link> / LOGIN</h4>
                 </div>;
             </div>
             <div className="registerbg">
             <Container>
                     <Row>
                         <Col className='col-md-8 offset-md-4 m-auto'>
                             <div className="userTitle">
                                 <h4  className='color_theme'>Login Here</h4>
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
                                    <p className='error'>{error.message}</p>
                                </Form.Group>
                                <Button className='btn-submit' type="submit">
                                    Login
                                </Button>
                                <Link to="/register">Have An Account? Login Here</Link>
                            </Form>
                         </Col>
                     </Row>
             </Container>
             </div>
            </>
        )
    }
}

const mapStateToProps = state => {

    return {
        authLogin : state.login    }
}

export default connect(mapStateToProps, {login})(Login);