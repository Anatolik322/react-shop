import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { useState } from 'react';
import s1 from '../../img/fashion-banner.png'
import s2 from '../../img/fashion-promotion.png'
import s3 from '../../img/perfume-banner.png'
import { Zoom } from 'react-slideshow-image';

function Slider() {
  const [imageNum, setImageNum] = useState(1);

  const images = [
    s1,s2,s3
 ];
  return (
    <div>
         <Zoom scale={0.9}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%", height: "70%"}} src={each} />)
          }
        </Zoom>
      </div>
   
  )
}

export default Slider
