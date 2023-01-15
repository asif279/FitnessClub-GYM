import React from 'react';
import Header from './Header/Header';
import './Hero.css';
import Heart from '../../assets/heart.png';
import Heroo from '../../assets/hero_image.png';
import Herob from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';



const Hero = () => {
    
    return (
       <div className="hero">
       <div className="blur hero-blur"></div>


       <div className="leftH">
       <Header/>
            <div className="best-ad">
               <div></div>
               <span>The Best Fitness Club in Town</span>
           </div>


{/* Hero heading */}
<div className="hero-text">

 <div>
 <span className='stroke-text'>Shape </span>
 <span>your</span>
 </div>
<div><span>
    Ideal Body
</span></div>
<div><span>
In here we will help you to shape and build your ideal body and live up your life to fullest
</span></div>

</div>

  <div className="figures">

  <div>
  <span>+140</span>
  <span>Expert Coaches</span>
  </div>

  <div>
  <span>+978</span>
  <span>Members Joined</span>
  </div>

  <div>
  <span>+50</span>
  <span>Fitness Program</span>
  </div>



  </div>

  {/* hero button */}
  <div className="hero-btn">
    <button className="btn">Get Started</button>
    <button className="btn">Learn More</button>
  </div>

        </div>
       <div className="rightH">
<button className="btn">Join Now</button>

    <div className="heart-name">
    <img src={Heart} alt=""/>
    <span>Heart Rate</span><span>116 bpm</span>
    </div>

<img src={Heroo} alt="" className="hero-image" />
<img src={Herob} alt="" className="hero-img-black" />

<div className="calories">
<img src={Calories} alt="" />
<div><span>Calories Burned</span><span>220Cal</span></div>
</div>
       </div>


       </div>
    );
};

export default Hero;