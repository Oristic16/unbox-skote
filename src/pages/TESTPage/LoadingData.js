import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Lottie from 'react-lottie';
import { Container } from 'reactstrap';
import * as loadingData from './loadingData.json'

const LoadingData = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        },2000)
    },[])

  return (
    <React.Fragment>
        <Lottie options={defaultOptions} width={200} height={150} />
        
    </React.Fragment>
  )
}

export default LoadingData