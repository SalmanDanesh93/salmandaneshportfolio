import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/sullyscreative.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="sullysc" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social">
                        <href src="../assets/instagram.png" alt="Icon"> </href>
                        <href src="../assets/linkedin.png" alt="Icon"> </href>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}