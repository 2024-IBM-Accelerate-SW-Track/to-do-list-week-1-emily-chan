import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/_DSC1845.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile_pic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Emily</div>
        <div className="brief_description">
        <p>I enjoy baking, hiking, and traveling.</p> 
        </div>
      </div>
    </div>
  </div>
    )
  }
}


