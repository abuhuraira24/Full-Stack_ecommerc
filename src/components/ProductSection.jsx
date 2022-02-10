import { Container, Row } from "reactstrap";
import ProductsItems from "./Products/Products";

const Products = () => {
    return (
        <Container fluid className="pt-3">
            <Row>
              <ProductsItems />
            </Row>
        </Container>
    );
}

export default Products;