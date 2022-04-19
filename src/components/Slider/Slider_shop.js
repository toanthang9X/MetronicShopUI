import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider_shop.scss'
import bg1 from '../../assets/images/bg1.jpg'
import bg2 from '../../assets/images/bg2.jpg'
import bg3 from '../../assets/images/bg3.jpg'
import bg4 from '../../assets/images/bg4.jpg'

const photos = [
    {
        name: 'photo 1',
        url: bg1
    },
    {
        name: 'photo 2',
        url: bg2
    },
    {
        name: 'photo 3',
        url: bg3
    },
    {
        name: 'photo 4',
        url: bg4
    },
]

function Slider_shop() {
    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'slides'
    };
    
  return (
    <div className='slider'>
        <Slider {...settings}>
            {/* <div>
                <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
                <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
                <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
                <img src="http://placekitten.com/g/400/200" />
            </div> */}
            {
                photos.map((photo)=>(<div key={photo.name}><img src={photo.url}/> </div>))
            }
        </Slider>
    </div>
    
  )
}

export default Slider_shop