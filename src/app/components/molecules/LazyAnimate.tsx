import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/4333-calendar-event.json'

type Props = {}

export default function LazyAnimate({}: Props) {
    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };
   
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:1000,backgroundColor:'#00000099',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Lottie options={defaultOptions}
              height={200}
              width={200}
             />
    </div>
     
   
  )
}