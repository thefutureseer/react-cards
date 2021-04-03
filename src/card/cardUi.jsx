import React from 'react';
import horsy from '../css/images/babyHorse2.jpg';

export default function cardUi(props) {
  return (
    <div className='card text-center'>
      <div className="overflow">
        <img src={horsy} alt="horsy"/>
      </div>
      
    </div>
  )
}
