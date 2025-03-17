import React from 'react'
import ImageSlider from './Components/ImageSlider/ImageSlider'
const icon = 'icon.jpg';
const love = <img src={icon} height='50' ></img>
const lav = <img src={icon} height='50' ></img>;
import { count } from './Components/ImageSlider/ImageSlider';
function App() {


  return (
    <div>
      <h1 style={{color: "white",
      backgroundColor: 'rgb(115,79,150)',
      padding: "1%" ,
      display:'flex',
      justifyContent: 'center',
      fontFamily : 'revert-layer'}}>Happy Birthday Aurena!</h1>
      <h1 style={{color: "white",
      backgroundColor: 'rgb(115,79,150)',
      padding: "1%" ,
      display:'flex',
      justifyContent: 'center',
      marginTop:'-40px',
      fontFamily : 'revert-layer'}}>made with{love}by cattos</h1>
      <ImageSlider />
    </div>
  )
}

export default App
