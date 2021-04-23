import React from 'react';
import { Link, useLocation } from "react-router-dom";
import photo from "./images/image0[115] (2).jpeg";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="h1">
          <h1>  <span className="green">H</span>ome </h1>
      </div>
      <div className="person">
        <img
          src={ photo }
          alt="person picture"
        />
      </div>
      <div className="title">
        <h2>
          <p>ABDELHAK SAADI</p>
          <p>Web App developer</p>
        </h2>
        <h3><p>HTML / CSS / JavaScript / React.js / Redux / Python / Django </p></h3>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;