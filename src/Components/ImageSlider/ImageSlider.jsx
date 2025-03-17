import { useEffect, useState } from "react";
import "./ImageSlider.css"
import { IoIosArrowBack } from "react-icons/io";
import gsap from 'gsap';


const image1 = "././1.jpg";
const image2 = "././2.jpg";
const image3 = "././3.jpg";
const image4 = "././4.jpg";
const image5 = "././5.jpg";
const image6 = "././6.jpg";
const image7 = "././7.jpg";
const image8 = "././8.jpg";
const image9 = "././9.jpg";
const image10 = "././10.jpg";
const image11 = "././11.jpg";
const image12 = "././12.jpg";
const image13 = "././13.jpg";
const image14 = "././14.jpg";
const image15 = "././15.jpg";
const image16 = "././16.jpg";
const image17 = "././17.jpg";
const image18 = "././18.jpg";
const image19 = "././19.jpg";
const image20 = "././20.jpg";
const image21 = "././21.jpg";
const image22 = "././22.jpg";
const image23 = "././23.jpg";
const image24 = "././24.jpg";
const image25 = "././25.jpg";
const image26 = "././26.jpg";
const image27 = "././27.jpeg";
const image28 = "././28.jpeg";
const image29 = "././29.jpeg";
const image30 = "././30.jpeg";
const image31 = "././31.jpeg";
const image32 = "././32.jpeg";
const image33 = "././33.jpeg";
const image34 = "././34.jpeg";
const image35 = "././35.jpeg";
const image36 = "././36.jpeg";

const imageArray = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,
    image21,image22,image23,image24,image25,image26,image27,image28,image29,image31,image32,image33,image34,image35,image36];
    console.log(imageArray.length)
function ImageSlider() {

    const[midImage,setMidImage] = useState(0);
    const[rightImage,setRightImage] = useState(1);
    const[leftImage,setLeftImage] = useState(imageArray.length-1);

    useEffect(()=>{
        if(midImage == 0){
            setLeftImage(imageArray.length-1)
            setRightImage(1);
        }
        else if(midImage == imageArray.length-1)
        {
            setRightImage(0);
            setLeftImage(midImage-1);
        }
        else{
            setRightImage(midImage+1);
            setLeftImage(midImage-1);
        }

    },[midImage]);

    const Increment=()=>{
        if(midImage == imageArray.length-1){
            setMidImage(0);
        }
        else{
            setMidImage(midImage+1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:-200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }
    const Decrement=()=>{
        if(midImage == 0){
            setMidImage(imageArray.length-1);
        }
        else{
            setMidImage(midImage-1);
        }
        //----------------GSAP ANIMATIONS-------------------------
        gsap.fromTo('.middleImage',
            {x:200,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.rightImage',
            {x:600,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
        gsap.fromTo('.leftImage',
            {x:-500,opacity:0,scale:0.6},
            {x:0,opacity:1,scale:1,duration:0.5}
        );
    }

  return (
    <div className="ImageSlider" >
        <div className="ImageSliderContainter">
            <div className="Images">
                <img src={imageArray[rightImage]} className="rightImage" />
                <img src={imageArray[midImage]} className="middleImage" />
                <img src={imageArray[leftImage]} className="leftImage" />
            </div>
        </div>
        <div className="buttons">
            <button className="leftButton" onClick={()=>Decrement()}><IoIosArrowBack />

            </button>
            <button className="rightButton" onClick={()=>Increment()}><IoIosArrowBack />
            </button>
        </div>
        
         <div className="dotsPlace">
        {
            imageArray.map((_,index)=>(
                <div className={`dots ${index===midImage?'active':'passive'}`}></div>
            ))
        }
        </div>
    </div>
    
  )
}

export default ImageSlider
