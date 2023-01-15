import React from 'react';
import './Testimonial.css';
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Testimonial = () => {
    const [select,setSelect]=useState(0);
    const tlength=testimonialsData.length
    return (
       <div className="Testimonial">
        <div className="left-t">
   <span className='testi'>Testimonial</span>
   <h1 className='stroke-text'>What They</h1>
   <span className='say'>Say about Us</span>
   <span>
    {testimonialsData[select].review}
   </span>
   <span style={{color:"orange"}}>
    {testimonialsData[select].name} -{testimonialsData[select].status}
   </span>
   

        </div>
        <div className="right-t">
        <div></div>
        <div></div>
            <img src={testimonialsData[select].image} alt="" />
            <div className="arrows">
                <img 
                onClick={()=>{
                    select===0
                    ?setSelect(tlength-1)
                    :setSelect((prev)=>prev-1)
                }}
                 src={leftArrow} alt="" />
                <img  onClick={()=>{
                    select===tlength-1
                    ?setSelect(0)
                    :setSelect((prev)=>prev+1)
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Testimonial;