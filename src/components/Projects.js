import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImg1 from "../assets/Coding.png";
import projectImg2 from "../assets/Densecloud1.png";
import projectImg3 from "../assets/Drone.png";
import projectImg4 from "../assets/EE1.png";
import projectImg5 from "../assets/Surface1.png";
import projectImg6 from "../assets/nutririte.png";
import projectImg7 from "../assets/gamespace.png";
import projectImg8 from "../assets/SEO.png";
import projectImg9 from "../assets/notetakeapp.png";
import projectImg10 from "../assets/jsquiz.png";
import projectImg11 from "../assets/currentFitness.png";
// import projectImg12 from "../assets/drone-birds.jpg";
// import projectImg13 from "../assets/tree.jpg";

import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Computer Science",
      description: "Full-Stack Coding",
      imgUrl: projectImg1,

    },
    {
      title: "Dense Cloud Mapping",
      description: "Dense Cloud Mapping",
      imgUrl: projectImg2,
    },
    {
      title: "Drone Photography & Videography",
      description: "Drone Photography & Videography",
      imgUrl: projectImg3,
    },
    {
      title: "Electrical Engineering Design",
      description: "Electrical Engineering Design",
      imgUrl: projectImg4,
    },
    {
      title: "Civil Engineering Design",
      description: "Civil Engineering Design",
      imgUrl: projectImg5,
    },
    {
      title: "NutriRite - React App",
      description: "Nutritional Application built with React app w/ MongoDB",
      imgUrl: projectImg6,
    }
  ]

  const projects2 = [
    {
      title: "GameSpace",
      description: "MVC Application",
      imgUrl: projectImg7,
    },
    {
      title: "HTML Framing",
      description: "SEO - Framework",
      imgUrl: projectImg8,
    },
    {
      title: "Note-Taker App",
      description: "Note Taking App",
      imgUrl: projectImg9,
    },
    {
      title: "Javascript Quiz",
      description: "Javascript Quiz",
      imgUrl: projectImg10,
    },
    {
      title: "Current Weather App",
      description: "Functioning App with APIs for weather",
      imgUrl: projectImg11,
    },
    {
      title: "Drone Photography",
      description: "Ariel View",
      // imgUrl: projectImg12,
    }
  ]

  const projects3 = [
    {
      title: "Drone Photography",
      description: "Ariel View",
      // imgUrl: projectImg13,
    }
  
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects!</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}

                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="../assets/dronesky.JPG" width="500px" height="500px" alt="bckground"></img>
    </section>
  )
}
