import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import opent from "./icons/icons8-ios-app-icon-shape-100.png"; 
import closet from "./icons/icons8-ios-app-icon-shape-160.png"; 
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
    
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
            <h1> <span className="green">A</span>bdelhak </h1>
        </div>
        <div className="list-wrapper">
          <img
            src={opent}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={closet}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
               
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="{/About}"
                onClick={handleClose}               
              >
                About
              </Link>
            </li>
            
            <li>
              <Link
                to="/Projects"
                onClick={handleClose}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;