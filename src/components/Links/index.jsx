import "./style.css";
import icon1 from "./icons/icons8-github-48.png";
import icon2 from "./icons/icons8-linkedin-48.png";


const Footer = () => {
  return (
    <footer>
      
     
      <a
        href="https://www.linkedin.com/in/abdelhak-saadi-06a21b1bb/"
        target="_blank">
      
        <img
          src={icon2}
          alt="LinkIn-icon"/>
      </a>  
      <a
        href="https://github.com/saadiabdelhak1"
        target="_blank">
      
        <img
          src= {icon1}
          alt="LinkIn-icon"/>
      </a> 
      
    </footer>
  );
};

export default Footer;