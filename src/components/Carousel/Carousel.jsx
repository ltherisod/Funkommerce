import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import { AnimeCards, CarouselInnerTitle, CarouselPop, HerosCards, StarWarsCards, VilliansCards } from '../Styles/Styles';

function CarouselBanner() {
  return (
   <div style={{width:'85%', alignSelf:'center'}}>
     <Carousel>
      <Carousel.Item>
       <HerosCards>
        <CarouselInnerTitle> Super Heros</CarouselInnerTitle>
        <CarouselPop src='../CapturaSpidey.png' alt='spiderman'/>
       </HerosCards>
      </Carousel.Item>
      <Carousel.Item>
        <VilliansCards>
        <CarouselInnerTitle> Star Wars</CarouselInnerTitle>
        <CarouselPop src='../CapturaGorr.png' alt='gorr'/>
        </VilliansCards>
      </Carousel.Item>
      <Carousel.Item>
        <AnimeCards>
        <CarouselInnerTitle> Anime</CarouselInnerTitle>
        <CarouselPop src='../CapturaNaruto.png' alt='naruto'/>
        </AnimeCards>
      </Carousel.Item>
      <Carousel.Item>
        <StarWarsCards>
       
        <CarouselInnerTitle> Super Villians</CarouselInnerTitle>
        <CarouselPop src='../CapturaGorr.png' alt='gorr'/>
        </StarWarsCards>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default CarouselBanner;