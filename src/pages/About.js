import React, { Component } from 'react';
import './About.css';
import profilePic from 'C:/Users/tebib/.ssh/to-do-list_week1-TebibuS/src/assets/profile_pic_name.jpg';


export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profilePic}
                alt="Profile Pic"
              />
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Your Name</div>
              <div className="brief_description">
                // Details about you goes here
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}