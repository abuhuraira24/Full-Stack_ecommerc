import { Container,Row, Col } from "reactstrap"
import { Carousel } from "react-bootstrap"
import "../assets/scss/slider.scss"
import sliderOne from "../assets/images/sliderOne.jpeg"
import sliderTwo from "../assets/images/sliderTwo.jpeg"
const Slider = () => {

 
    return (
        <>
        <Container fluid>
            <Row>
              <Col className="p-0">
              <Carousel >
                <Carousel.Item>
                <img className="d-block w-100" src={sliderOne} alt="Second slide" />

                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={sliderTwo} alt="Second slide" />
                </Carousel.Item>
             </Carousel>
              </Col>
            </Row>
        </Container>
        </>
    )
}
export default Slider