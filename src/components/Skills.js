import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
    const responsive = {
        largeDisplays: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        standardDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Engineering - Web Development - Design Consultant - Drone Pilot - Business Development </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h5>Innovative Design ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Drone Videographer ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Brand Marketing ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Microsoft Suites ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Time Management ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Business Strategy ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>Project Management ✔️</h5>
                                </div>
                                <div className="item">
                                    <h5>2D/3D AutoCAD ✔️</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <href className="background-image-left" src="../assets/morrorock.jpg" alt="Image"> </href>
        </section>
    )
}