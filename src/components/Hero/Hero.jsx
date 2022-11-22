import React from 'react'
import { HeroAnimated, CareBear, TextHero, Title, MainTitle, InfoText, HeroButton } from '../Styles/Styles'
const Hero = () => {
  return (
    <HeroAnimated>
        <TextHero>
            <Title>SPLURGE WORTHY</Title>
            <MainTitle>GIFTS WITH WOW FACTOR</MainTitle>
            <div>
                <InfoText>Shop the Splurgeworthy Gift Guide to Find Presents That Will Wow the Crowd This Year!</InfoText>
                <HeroButton>SHOP COLLECTION</HeroButton>
            </div>
        </TextHero>
        <CareBear src='../CareBear2.png' alt='CareBear'/>
    </HeroAnimated>

  )
}

export default Hero