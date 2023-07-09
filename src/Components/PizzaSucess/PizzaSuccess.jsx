import React, { useState, useEffect } from 'react';
import './PizzaSuccess.css';

const PizzaSuccess = () => {
  

  return (
    
    <>
    <h1 >Pizza is Delivered Successfully</h1>
    <div className="image-container">
        
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR466U0TwKktPmkcKSfL7smf1IgWSRsvS1i7w&usqp=CAU" width={400} height={400} alt="Pizza" className="animated-image" />
    </div>
    </>
  );
};

export default PizzaSuccess;
