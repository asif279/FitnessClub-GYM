import React from 'react';
import './Plan.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plan = () => {
    return (
        <div className='plan-container'>
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>

           <div className="hi">
            <h1 className="stroke-text">READY TO START</h1>
            <h1 >YOUR JOURNEY</h1>
            <h1 className="stroke-text">WITH US</h1>
           </div> 

           <div className="plans">
           {
            plansData.map((plan,i) => (
        <div className="plan">
        
     {plan.icon}
     <span>{plan.name}</span>
     <span className='price'>${plan.price}</span>

     <div className="features">
        {
            
           plan.features.map((feature,i)=>(
            <div className="feature">
                <img src={whiteTick} alt="" />
                <span key={i}>{feature}</span>
            </div>
           ))
        }
     </div>

<div>
    <span>See More Benifits -</span>
</div>
<button className="btn">Join Now</button>






        </div>
      ))
                
            }
           

           </div>
        </div>
    );
};

export default Plan;