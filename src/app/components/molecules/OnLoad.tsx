import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/84272-loading-colour.json'

type Props = {}

export default function OnLoad({}: Props) {
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <Lottie options={defaultOptions}
    height={100}
    width={20}
   />

  )
}