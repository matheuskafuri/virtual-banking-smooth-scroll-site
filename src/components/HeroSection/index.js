import React, {useState} from 'react'

import Video from '../../videos/video.mp4'
import {Button} from '../Button/ButtonElements';

import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroSectionElements' 

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign ip for a new account today and receive $250 in credit towards your next payment.
        </HeroP>

        <HeroButtonWrapper>
          <Button 
            to="signup" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started { hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
