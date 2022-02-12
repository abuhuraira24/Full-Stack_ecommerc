import {Navbar,Container,Nav} from "react-bootstrap"
import list from "../assets/images/list.png"
import search from "../assets/images/search.png"
import home from "../assets/images/home.png"
import shop from "../assets/images/shop.png"
import user from "../assets/images/user.png"

const BottomSticky = () => {


    const showModal = function (e) {
        const modal = document.querySelector("#modal");
        const body = document.querySelector("body");
        modal.classList.toggle("hidden")
        if (!modal.classList.contains("hidden")) {
          // Disable scroll
          body.style.overflow = "hidden";
            } else {
                // Enable scroll
                body.style.overflow = "auto";
            }
      }
    return (
        <Navbar fixed="bottom" variant="dark" className="bottomSticky">
            <Container fluid>
            <Nav className="me-auto">
            <Nav.Link href="#">
                <img src={list} alt="list" />
            </Nav.Link>
            <Nav.Link href="#">
                <img src={search} alt="search" />
            </Nav.Link>
            <Nav.Link href="#">
               <img src={home} alt="home" />
            </Nav.Link>
             <button onClick={() => showModal()}>
              <img src={shop} alt="shop" />
              </button>
           
            <Nav.Link href="#">
              <img src={user} alt="user" />
            </Nav.Link>
            </Nav>
            </Container>
        </Navbar>

    );
}


export default BottomSticky;