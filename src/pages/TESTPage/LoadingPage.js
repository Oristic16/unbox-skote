import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import * as loadingData from './loading1.json'
import Lottie from 'react-lottie'
import { Container } from 'reactstrap'
import FadeIn from 'react-fade-in/lib/FadeIn'

const LoadingPage = () => {

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
    <Container style={{display:"flex", justifyContent:"center", alignItems:"center",minHeight:"90vh"}}>
        {!loading ? <FadeIn><Lottie options={defaultOptions} width={600} height={500} /></FadeIn> : null}
        
    </Container>
  )
}

export default LoadingPage