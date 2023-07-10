import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import "./slider.scss"
import { useState } from 'react';
import s1 from '../../img/01.jpg'
import s2 from '../../img/02.jpg'
import s3 from '../../img/03.jpg'
import { Zoom } from 'react-slideshow-image';

function Slider() {
  const [imageNum, setImageNum] = useState(1);

  const images = [
    s1,s2,s3
 ];

  return (
    <div id='slider'>
         <Zoom scale={0.1} id="slider_comp">
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
    </div>
  )
}

export default Slider
