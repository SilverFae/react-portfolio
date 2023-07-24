import React from 'react';
import prof from '../assets/images/UnlinedHospitableAgama-size_restricted.gif'
import './about.css'


export default function About() {
  return (
    <div className="about-container">
      <img src={prof} alt="Shannon Hogeboom" className="prof" />
      <div className="about-text">
        <h1>About Me</h1>
        {/* Add any additional content about yourself here */}
      </div>
    </div>
  );
}