import {Container,Row,Col} from "reactstrap"
import { BiBed,BiChair,BiTable } from "react-icons/bi";
const SideBar = () => {


    return (
        <Container>
            <Row className="d-flex">
                 <div className="item">
                   <BiBed />
                   <span>Bed</span>
                 </div>
                 <div className="item">
                   <BiChair />
                   <span>Chair</span>
                 </div>
                 <div className="item">
                   <BiBed />
                   <span>Sofa</span>
                 </div>
                 <div className="item">
                   <BiTable />
                   <span>Table</span>
                 </div>
                 
            </Row>
        </Container>
    )
}

export default SideBar