import React from 'react';
import './Programe.css';
import {programsData} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png'; 

const Programe = () => {
    return (
       <div className="Programs" id="Programs">
        <div className="program-header">

            <span className='stroke-text'>Explore</span>
            <span>Programs</span>
            <span className='stroke-text'>To shape You</span>
        </div>
  <div className="program-catagories">
{
    programsData.map((program)=>(
        <div className="catagory">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={rightArrow} alt="" /></div>
        </div>
    ))
}

  </div>

       </div>
    );
};

export default Programe;