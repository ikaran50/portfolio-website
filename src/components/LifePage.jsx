import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Row, Col } from 'react-bootstrap';
import xaviers from '../assets/StXaviers.png';
import canada from '../assets/Canada.png';
import waterloo from '../assets/Waterloo.png';
import 'react-vertical-timeline-component/style.min.css';


function LifePage() {

    return (
        <div className='homepagebackground'>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#00000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="1990-2000"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Early Life</h3>
                <Row>
                <Col md={5}>
                   <img className='image--box'  src={xaviers} />
                </Col>
                <Col md={8}>
                    <p>
                     I was born in Bokaro Steel City India. This is where it all began. I started my schooling from St. Xaviers School which was an amazing school and quite competetive
                     to get admission in. This school was known for its English fluency and taught me all the skills I needed to become a good essay writer.
                    </p>
                </Col>
                </Row>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#00000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2000-2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Immigration</h3>
                <Row>
                <Col md={5}>
                   <img className='image--box'  src={canada} />
                </Col>
                <Col md={8}>
                    <p>
                      I immigrated to Canada in 2001 with my family. Initially it was very difficult for my family to settle in but we slowly adjusted to a different lifestyle. I started my schooling in 
                      morning star middle school from grade 6 to grade 8. I made some great friends here who I am still in touch with. Then I went to Ascension of our Lord Secondary school from grade 9 to 
                      grade 12 where I studied pretty hard and achieved some good results. Due to my high marks I was able to get into the prestegious University of Waterloo Computer Science program in 2008. 
                    </p>
                </Col>
                </Row>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#00000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2010-Present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Career</h3>
                <Row>
                <Col md={5}>
                   <img className='image--box'  src={waterloo} />
                </Col>
                <Col md={8}>
                    <p>
                      My early days at University of Waterloo was challenging as I was not able to adapt to the university way of studying. On top of that, the complexity of the courses added to the challenge. 
                      We also had to then interview for internships during the semester which was also difficult. It took me time to adjust to this hectic schedule but I survived through university and internships
                      in different industries including Banking, Startups, and Insurance Companies. I must say that my experience with the collaboration of studying and internships was exteremly challenging but 
                      equally enriching. I graduated in 2014 and started looking for full time jobs. I did not land up with my dream job initially but slowly worked my way up and landed up with great opportunities 
                      afterwards. As of now, I am delighted with what I was able to achieve right from the start of my career to now. I believe I have come a long way and learned a lot which also made me change the way 
                      I think about life.  I also believe that there is more to come and this is only the start of a great journey. 
                    </p>
                </Col>
                </Row>

            </VerticalTimelineElement>
           </VerticalTimeline>

        </div>

    )


}


export default LifePage