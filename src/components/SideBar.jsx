import {Container,Row} from "reactstrap"
import { BiBed,BiChair,BiTable } from "react-icons/bi";
import { bedItems, sofaItems } from "../store/action/shoppingAction/shopping-action";
import { useDispatch } from "react-redux";

const SideBar = () => {

  const dispatch = useDispatch()

    return (
        <Container>
            <Row className="d-flex">
                 <div onClick={() => dispatch(bedItems("bed"))}  role="button" className="item">
                   <BiBed />
                   
                   <span>Bed</span>
                 </div>
                 <div className="item" role="button">
                   <BiChair />
                   <span>Chair</span>
                 </div>
                 <div onClick={() => sofaItems("sofa")} role="button"  className="item">
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


// const mapDispatchToProps = dispatch => {
//   return {
//     bedItems : (id) => dispatch(bedItems(id)),
//     sofaItems : (id) => dispatch(sofaItems(id))
//   }
// }
// export default connect(null,mapDispatchToProps)(SideBar)
export default SideBar
