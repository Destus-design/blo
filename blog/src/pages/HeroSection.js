import React, {useState} from 'react';
import '../App.css';
import './Pages.css';
import girlwork from '../girlwork.jpg';
import Naturalhair from '../Naturalhair.jpg';
import Liverpool from '../Liverpool.jpg';
import Heart from '../Heart.jpg';
import firecrackerchicken from '../firecrackerchicken.jpg';

import Carousel from 'react-bootstrap/Carousel';

function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='hero-container'>
      <img src={''} alt='' />
      <h1 className="m-3">ADVENTURE AWAITS</h1>
      <div className="w-100 align-content-center justify-content-center d-flex">
   <div className=" shadow m-3 p-2" style={{width: '400px'}}>
    <Carousel activeIndex={index} onSelect={handleSelect} className=" blue"  >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={girlwork}
          alt="First slide"
          height="400px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Naturalhair}
          alt="Second slide"
          height="400px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Liverpool}
          height="400px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firecrackerchicken}
          height="400px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Heart}
          height="400px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
      </div>
   

    </div>
  );
}

export default HeroSection;