import React, {Component} from "react";
import Card from "./cardUi";
import horsy from "../css/images/babyHorse2.jpg";
import babyWDogTwo from "../css/images/babyWDog2.jpg";
import catScratch from "../css/images/catScratch.jpg";

export default class Cards extends Component{

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col md 4">
            <Card imgsrc={horsy} title="Horsy"/>
          </div>
          <div className="col md 4">
            <Card imgsrc={babyWDogTwo} title="Two Babies"/>
          </div>
          <div className="col md 4">
            <Card imgsrc={catScratch} title="CatScratch"/>
          </div>

        </div>
      </div>
    );
  }
}