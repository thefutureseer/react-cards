import React from 'react';
import "../css/card-style.css";

function Card(props) {
  return (
    <div className='card text-center'>
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequatur labore nesciunt ratione consectetur reprehenderit 
           mollitia optio quia iure unde inventore!
        </p>
        <a href="#" className="btn btn-outline-success">GO anywhere link!</a>
      </div>
       
    </div>
  )
}
 export default Card;