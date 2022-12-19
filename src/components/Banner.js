import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from "../assets/what-do-you-see_adobe_express.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(0);
    const toRotate = ["Engineering Design", "Web Designer", "Web Developer", "Drone Videographer"]
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(400);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Delighted to have you! Welcome to my Portfolio!</span>
                                    <h1>{`Hello! I'm Salman`} <span className="text-rotate" datePeriod="1000" data-rotate='[ "Engineering Design", "Web Designer", "Web Developer", "Drone Videographer" ]'><span className="wrap"> {text} </span></span> </h1>
                                    <p>I enjoy problem-solving and helping my peers and clients achieve the most out of work. I am meticulous, disciplined, and hard-working. Driven to excel in all aspects of my life. Recognized for being innovative and detail-oriented in addition to having strong leadership and communication skills. Thank you for taking time to get to know a little about me and hope to work with you soon!</p>
                                    <button onClick={() => console.log('connect')}>Connect With Me!</button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}