import React from 'react'
import CarouselBanner from '../../components/Carousel/Carousel'
import { CarouselText } from '../../components/Styles/Styles'

const Carousel = () => {
  return (
    <>
        <CarouselText>EXPLORE OUR CATEGORIES</CarouselText>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
        <CarouselBanner/>
        </div>
    </>
  )
}

export default Carousel