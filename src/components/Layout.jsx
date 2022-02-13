import { Container } from "reactstrap";
import Header from "../parts/Header";
import SideToggle from "../components/addToCart/SideToggle"

const Layout = ({children}) => {

    return (
            <>
             <SideToggle />
                <Container fluid className="p-0">
                  <Header />
                </Container>
             {children}

            </>
    )
}


export default Layout;