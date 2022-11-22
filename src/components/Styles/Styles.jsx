import styled from 'styled-components'
export const Logo = styled.img`
 width:10rem;
`
export const HeroAnimated = styled.div`
width:100%;
height:97vh;
display:flex;
justify-content:space-between;
align-items:center;
animation: animateBg 50s linear infinite;
  background-image: linear-gradient(90deg,#bd4faf,#5794db,#bd4faf,#5794db);
  background-size: 300% 100%;
}
@keyframes animateBg {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`
export const CareBear = styled.img`
width:24rem;
align-self:flex-end;
`
export const TextHero = styled.div`
align-self:center;
padding:2rem;
width:53%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-between;

`
export const Title = styled.p`
font-family: 'Poppins', sans-serif;
color:white;
font-weight:300;
font-size:1.5rem;
margin:0:
`
export const MainTitle = styled.h1`
font-family: 'Poppins', sans-serif;
color:white;
font-weight:900;
font-size:4.2rem;
margin:0;
`
export const InfoText = styled.p`
font-family: 'Poppins', sans-serif;
color:white;
font-weight:300;
font-size:1.7rem;
margin:0;
`
export const HeroButton = styled.button`
background-color:white;
color:black;
font-family: 'Poppins', sans-serif;
font-size:1.1rem;
font-weight:bold;
border-radius:2rem;
border:none;
padding:1rem 1.5rem;
margin-top:1.5rem;
`

export const CarouselText = styled.h2`
font-family: 'Poppins', sans-serif;
font-weight:900;
font-size:3rem;
`
export const HerosCards = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:2rem;
animation: animateBg 37s linear infinite;
background-image: linear-gradient(90deg,#4ec3fd,#0066db,#0011ff,#4ec3fd,#0066db);
background-size: 400% 100%;
}
@keyframes animateBg {
0% { background-position: 0% 0%; }
100% { background-position: 100% 0%; }
`
export const VilliansCards = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:2rem;
animation: animateBg 37s linear infinite;
background-image: linear-gradient(90deg,#db0000,#ff0000,#ff5252,#db0000,#ff0000);
background-size: 400% 100%;
}
@keyframes animateBg {
0% { background-position: 0% 0%; }
100% { background-position: 100% 0%; }
`
export const AnimeCards = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:2rem;
animation: animateBg 37s linear infinite;
background-image: linear-gradient(90deg,#ff7300,#ff8000,#f9e939,#ff7300,#ff8000);
background-size: 400% 100%;
}
@keyframes animateBg {
0% { background-position: 0% 0%; }
100% { background-position: 100% 0%; }
`
export const StarWarsCards = styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:space-between;
align-items:center;
border-radius:2rem;
animation: animateBg 37s linear infinite;
background-image: linear-gradient(90deg,#3f0047,#c800ff,#8e52ff,#3f0047,#c800ff);
background-size: 400% 100%;
}
@keyframes animateBg {
0% { background-position: 0% 0%; }
100% { background-position: 100% 0%; }
`
export const CarouselInnerTitle = styled.h4`
font-family: 'Poppins', sans-serif;
font-weight:900;
font-size:2.5rem;
color:white;
`
export const CarouselPop= styled.img`
width:19rem
`