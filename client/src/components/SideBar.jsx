import {Container,Row} from "reactstrap"
import { BiBed,BiChair,BiTable } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { bedItems, woodItems,phoneItems,tableItems} from "../store/action/shoppingAction/shopping-action";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";

const SideBar = ({bedItems,woodItems,phoneItems,tableItems}) => {


    return (
        <Container>
            <Row className="d-flex">
                 <HashLink to="#products" className="sideFilter">
                  <div onClick={() => bedItems("accessories")}  role="button" className="d-inline-block w-100">
                    <div className="item">
                    <BiBed />
                    <span>Accessories</span>
                    </div>
                  </div>
                 </HashLink>
                 <HashLink to="#products" className="sideFilter">
                  <div onClick={() => woodItems("wood")}  role="button" className="d-inline-block w-100">
                    <div className="item">
                    <BiChair />
                   <span>wood</span>
                    </div>
                  </div>
                 </HashLink>
                 <HashLink to="#products" className="sideFilter">
                  <div onClick={() => phoneItems("phone")}  role="button" className="d-inline-block w-100">
                    <div className="item">
                    <FaMobileAlt />
                   <span>Phone</span>
                    </div>
                  </div>
                 </HashLink>
                 <HashLink to="#products" className="sideFilter">
                  <div onClick={() => tableItems("table")}  role="button" className="d-inline-block w-100">
                    <div className="item">
                    <BiTable />
                   <span>Table</span>
                    </div>
                  </div>
                 </HashLink>

            </Row>
        </Container>
    )
}


const mapDispatchToProps = dispatch => {
  return {
    bedItems : (id) => dispatch(bedItems(id)),
    woodItems : (id) => dispatch(woodItems(id)),
    phoneItems : (id) => dispatch(phoneItems(id)),
    tableItems : (id) => dispatch(tableItems(id))
  }
}
export default connect(null,mapDispatchToProps)(SideBar)

