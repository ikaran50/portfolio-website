import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I am a full stack developer who has lots of experience in different companies with wide variety of backgrounds and tech stack. I am a quick learner who likes to dive into the problem in great detail until the problem is solved. My knack of programming began in my school days and my interest in programming has remained intact till now. 
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={100}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="right"
                                >
                                     {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage