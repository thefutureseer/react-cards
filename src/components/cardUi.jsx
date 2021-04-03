import React from 'react';
import horsy from '../css/images/babyHorse2.jpg';

export default function cardUi(props) {
  return (
    <div className='card text-center'>
      <div className="overflow">
        <img src={horsy} alt="horsy" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">CARD TITLE</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequatur labore nesciunt ratione consectetur reprehenderit 
           mollitia optio quia iure unde inventore!
        </p>
        <a href="3" className="btn btn-outline-success">GO anywhere link!</a>
      </div>
       
    </div>
  )
}
