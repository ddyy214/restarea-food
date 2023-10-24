import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

export default function SnackSection() {
    return (
      <section className="resip_section">
         <h2 style={{ height: '50px', color: '#fff', fontSize: '40px', left:'30px'}}>Snack</h2>
       
         <Carousel
        show={6}
        slide={3}
        rightArrow={true}
        leftArrow={true}
        swiping={"true"}
        useArrowKeys={"true"}
        >
   
        <img src="images/td1.png" className="image-style" alt="#" />
        <img src="images/td2.png" className="image-style" alt="#" />
        <img src="images/td3.png" className="image-style" alt="#" />
        <img src="images/td4.png" className="image-style"alt="#" />
        <img src="images/td5.png" className="image-stle" alt="#" />
        <img src="images/td6.png" className="image-style" alt="#" />
        <img src="images/td7.png" className="image-style" alt="#" />
        <img src="images/td7.png" className="image-style" alt="#" />
        <img src="images/td7.png" className="image-style" alt="#" />
          </Carousel>
          <h3 style={{ marginTop:'-90px', color: 'gray', fontSize: '12px', left:'5px'}}>마우스로 이동하세요</h3>
      </section>
    );
  }
  