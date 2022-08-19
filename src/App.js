
import './App.css';
import React from "react";
import nosatulip from '../src/components/assets/nosatulip.jpg'


export default function App() {
  return (
    <div>

      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      </div>


      <div class="about-section">
  <h1 className='port'>Portfolio</h1>
  <p>I am Christopher Resh.</p>
  <p>We Build, We create.</p>
</div>

<h2 className='go'>Our Services</h2>
<div class="row">
      <div class="column">
        <div class="card">
        <img className='imgs' src={nosatulip} alt='{mypic}'/>
          <div class="container">
            <h2>We offer quality IT Service</h2>
            <p class="title">Innovation is key to creative design</p>
            <p> And that is what we do here</p>
            <p>We Think, We build and we create</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
        <img className='imgs' src={nosatulip} alt='{mypic}'/>
          <div class="container">
            <h2>What can we do for you ?</h2>
            <p className='title'> Our UI/UX team are ready</p>
            <p>to kickstart your project with topnotch.</p>
            <p>creative designs</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
        <img className='imgs' src={nosatulip} alt='{mypic}'/>
          <div class="container">
            <h2>John Doe</h2>
            <p class="title">Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>john@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>

      
</div>

  <div class="footer">
      <p>Copyright &copy; 2022 | GhenGhen</p>
  </div>
    </div>

    
    
  ) ;
}
