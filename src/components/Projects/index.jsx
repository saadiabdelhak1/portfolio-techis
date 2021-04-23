import React from 'react';
import twitter from "./images/project-twitter.png";
import netflix from "./images/project-netflix.png";
import "./style.css";

const Projects = () => {
    return (
        <div className="Projects">
          <div className="h1">
            <h1>  <span className="green">P</span>rojects </h1>
          </div> 
          
          <div className="container">
              <div className="box">
                 <div className="image">
                   <img src={twitter} alt="twitter image"/>
                 </div>
                 <div className="about">
                    <h2>Twitter Project</h2>
                    <p>Built a Social Media App like Twitter from Scratch using 
                       HTML/CSS/JavaScript for the front end and Django(python) for the 
                       Backend & MySQL for the database. </p>
                    
                    <div className="links">
                        <a className="github">Github</a>
                        <a className="website">WebSite</a>
                    </div>
                 </div>   
              </div>
              <div className="box">
                <div className="image">
                   <img src={netflix} alt="Netflix image"/>
                </div>
                <div className="about">
                    <h2>Netflix Project</h2>
                    <p>Build a Streaming App like Netflix from scratch using React/Redux
                       and Django. Where you can create an account, login to your account 
                       and watch trailers using design similar to original Netflix.
                    </p>
                    <div className="links">
                        <a className="github">Github</a>
                        <a className="website">WebSite</a>
                    </div>
                </div>   
              </div>
              
          </div>
        </div>
    )
}

export default Projects
