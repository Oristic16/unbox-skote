import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Lottie from 'react-lottie';
import { Container } from 'reactstrap';
import * as loadingSetData from './loadingSetData.json'

const LoadingSetData = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingSetData.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        },900)
    },[])

  return (
    <Container style={{display:"flex", justifyContent:"center", alignItems:"center",minHeight:"90vh"}}>
        {!loading ? <FadeIn><Lottie options={defaultOptions} width={300} height={300} /></FadeIn> : null}
        
    </Container>
  )
}

export default LoadingSetData