import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import polltwo from './polltwo.jpg';
import pollthree from './pollthree.jpg';
import pollfour from './pollfour.jpg';


class Main extends Component {
render() {
return (
  
<Container>
    
<Row >
<Col>
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={pollfour}
alt="First slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={polltwo}
alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={pollthree}
alt="Third slide"
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</Col>


</Row>
</Container>

)
}
}

export default Main;
