import React from 'react'
import './style.scss'
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
  return (
    <div className='slider'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://technext.github.io/Metronic-Shop-UI/theme/assets/pages/img/shop-slider/slide1/bg.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='slider__caption'>
              <h5 className='slider__title'>TONES OF</h5>
              <h5 className='slider__title slider__title-orange'>SHOP UI FEATURES</h5>
              <h5 className='slider__title'>DESIGNED</h5>
              <hr />
              <p className='slider__des'>Lorem ipsum dolor sit amet constectetuer diam adipiscing elit euismod ut laoreet dolore.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://technext.github.io/Metronic-Shop-UI/theme/assets/pages/img/shop-slider/slide2/bg.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='slider__caption'>
              <span className='slider__title slider__text-l'>Unlimted</span>
              <span className='slider__text-s'>Layout Options</span>
              <span className='slider__text-m slider__des'>Fully Responsive</span>
              <button>See more details</button>
              <img src='https://technext.github.io/Metronic-Shop-UI/theme/assets/pages/img/shop-slider/slide2/price.png' alt='pictureprice' />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://technext.github.io/Metronic-Shop-UI/theme/assets/pages/img/shop-slider/slide3/bg.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='slider__caption'>
              <span className='slider__text-m slider__text-down'>Full Admin & Frontend</span>
              <span className='slider__text-m slider__text-b slider__text-down'>eCommerce UI</span>
              <span className='slider__text-m slider__text-down'>Is Ready For Your Project</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://technext.github.io/Metronic-Shop-UI/theme/assets/pages/img/shop-slider/slide4/bg.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='slider__caption'>
              <h5 className='slider__title'>THE MOST WANTED BIJOUTERIE</h5>
              <button>But It Now!</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slider