import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Service = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}> 
        <div>
            <img src={img1} alt="item1" />
            <p className='legend'>Full stack</p>
        </div>
        <div>
            <img src={img2} alt="item2" />
            <p  className='legend'>Peer to Peer stack</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Service
