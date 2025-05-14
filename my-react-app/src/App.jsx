import { useState } from 'react'

import './App.css'
import Accordain from './components/accordian/Index'
import Randomcolor from './components/random-color/Index'
import { StarRating } from './components/star-rating/Index'
import ImageSlider from './components/image-slider/Index'
import QrCodeGenerator from './components/qr-code'

function App() {

  return (
    <>
    {/* Accordian components */}
    <Accordain/>

    {/* Random color components */}
    <Randomcolor/>
    {/* star rating */}
    <StarRating noOfStars={10}/>

    {/* ImageSlider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} 
      page ={"1"}
      limit={"10"}/> 
    <QrCodeGenerator/>

    </>
  )
}

export default App
