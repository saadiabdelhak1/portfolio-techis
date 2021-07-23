import React from 'react';
import twitter from "./images/project-twitter-min.png";
import netflix from "./images/project-netflix-min.png";
import TECHshop from "./images/project-TECHshop-min.png";
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
                        <a className="github" href="https://github.com/saadiabdelhak1/twitter">Github</a>
                        <a className="website" href="https://twitter-abdelhak.herokuapp.com/">WebSite</a>
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
                    <p>Github and Heroku</p>
                    <div className="links">
                        <a className="github" >Github</a>
                        <a className="website" href="https://netflix-abdelhak.herokuapp.com/">WebSite</a>
                    </div>
                </div>   
              </div>
              <div className="box">
                <div className="image">
                   <img src={TECHshop} alt="TECHshop image"/>
                </div>
                <div className="about">
                    <h2>TECHshop</h2>
                    <h1>LOADING ...</h1>
                    <p></p>
                    <h3></h3>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    <h3>Deployment</h3>
                    <p>Github and Heroku</p>
                    <div className="links">
                        <a className="github" href="https://github.com/techis-fantastic-4/e-commerce">Github</a>
                        <a className="website" href="https://fantastic4-commerce.herokuapp.com/">WebSite</a>
                    </div>
                </div>   
              </div>
              
          </div>
        </div>
    )
}

export default Projects
