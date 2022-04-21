import {Navbar,Container,Nav} from "react-bootstrap"
import { useEffect, useState } from "react";
import list from "../assets/images/list.png"
import search from "../assets/images/search.png"
import home from "../assets/images/home.png"
import shop from "../assets/images/shop.png"
import { connect } from "react-redux"
import ToggleMenu from "./ToggleMenu";
import { HashLink } from 'react-router-hash-link';


const BottomSticky = ({cart}) => {

    const [cartCount, setCartCount] = useState(0);
   
    useEffect(() => {
      let count = 0;
    
      [].forEach((item) => {
        count += item.qty;
      });
      setCartCount(count);
    }, [cart, cartCount]);


    return (
        <Navbar fixed="bottom" bg="light" className="bottomMenu" expand={false}>
        <Container fluid>
        
            <Nav.Link href="#home">
                <img src={list} alt="list" />
            </Nav.Link>
            <Nav.Link href="#features">
               <img src={search} alt="list" />
            </Nav.Link>
            <Navbar.Toggle className="position-relative">
                <span className="itemCount bg_color">{cartCount}</span>
                <img src={shop} alt="shop" />
            </Navbar.Toggle>
            <HashLink to="#">
                <img src={home} alt="list" />
            </HashLink>
      
         
            <ToggleMenu />
        </Container>
      </Navbar>

    );
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };

export default connect(mapStateToProps)(BottomSticky);