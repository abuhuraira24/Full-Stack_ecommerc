import { Container } from "reactstrap";
import Header from "../parts/Header";
import AddToItems from "./AddToItems";


const Layout = ({children}) => {

    return (
            <>
             <AddToItems />
                <Container fluid className="p-0">
                  <Header />
                </Container>
             {children}

            </>
    )
}


export default Layout;