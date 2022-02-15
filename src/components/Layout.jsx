import { Container } from "reactstrap";
import Header from "../parts/Header";
import DesktopMenu from "./addToCart/DesktopMenu"

const Layout = ({children}) => {

    return (
            <>
             <DesktopMenu />
                <Container fluid className="p-0">
                  <Header />
                </Container>
             {children}

            </>
    )
}


export default Layout;