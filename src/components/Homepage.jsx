import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import { Link, NavLink } from "react-router-dom";
import AboutMe from '../assets/About Me.png';
import Interests from '../assets/Interests.png';
import Life from '../assets/Life.png';
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "../pages/style.css";


function Homepage() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I am Ishaan Karan</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/rahulvijay81");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/ishaan-karan/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
          <Col md={7}>
                <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnClick={true}
                            delay={0}
                            play={true}
                           direction="right"
                         >
                  <NavLink to="/about" >
                        <img  className='image--box' src={AboutMe} />
                    </NavLink>
                    <NavLink to="/interests" >
                        <img className='image--box'  src={Interests} />
                    </NavLink>  
                    <NavLink to="/life" >
                        <img className='image--box'  src={Life} />
                    </NavLink>               
             </Marquee>
              </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage