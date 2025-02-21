import React from 'react';
import './App.css';
import ThreeDModel from './ThreeDModel';


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="intro">
          <h1>Full Stack Developer</h1>
          <p>Frontend Developer | 3D Artist | Designer</p>
        </div>
      </header>
      
      <ThreeDModel />
      
      <section className="about">

        <h2>About Me</h2>
        <p>
          I am a passionate developer with a love for 3D modeling and creating interactive web experiences.
        </p>
      </section>
      
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          
          <div className="card">Project 1</div>
          <div className="card">Project 2</div>
          <div className="card">Project 3</div>
          
        </div>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <footer>
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
