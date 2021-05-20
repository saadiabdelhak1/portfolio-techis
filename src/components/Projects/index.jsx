import React from 'react';
import twitter from "./images/project-twitter-min.png";
import netflix from "./images/project-netflix-min.png";
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
                    <h2>Twitter clone Project</h2>
                    <h3>Technologies Used</h3>
                    <p>Python 80%, JavaScript 5%, HTML & CSS 15%, Cloudinary(cloud storage for images)</p>
                    <h3>User Story</h3>
                    <ul>
                      <li>User can post tweets</li>
                      <li>User can Edit tweets</li>
                      <li>User can delet tweets</li>
                      <li>User can comment</li>
                    </ul>
                    <h3>Deployment</h3>
                    <p>Github and Herpku</p>
                    
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
                    <h3>Technologies Used</h3>
                    <p>Python(django IPA) 30%, React & Redux 50%, HTML & CSS 20%, Cloudinary(cloud storage for images)</p>
                    <h3>User Story</h3>
                      <ul>
                        <li>User can Creact an account</li>
                        <li>User can login</li>
                        <li>User can search for movies</li>
                        <li>User can add movies to favorit list </li>
                      </ul>
                    <h3>Deployment</h3>
                    <p>Github and Herpku</p>
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
