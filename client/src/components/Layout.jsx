
import { Container } from "reactstrap";
import Header from "../parts/Header";
import React from "react";
import DesktopMenu from "./addToCart/DesktopMenu"

class Layout extends React.Component {
  // const path = window.location.pathname
  state = {
    path : window.location.pathname
  }
  destTopMenu = () => {
    if(this.state.path === "/dashboard"){
      return null
   }else if(this.state.path ===  "/") {
       return <DesktopMenu />
   }
  }
  render(){
    return (
      <>
       {/* <DesktopMenu /> */}
        {this.destTopMenu()}
          <Container fluid className="p-0">
            <Header />
          </Container>
       {this.props.children}

      </>
)
  }
}


export default Layout;