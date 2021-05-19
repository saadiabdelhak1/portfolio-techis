import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Links';
import NavBar from './components/NavBar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar/>         
        <Route exact path="/" component={Home} />          
        <Footer/>
        <About/>
        <Projects/>
      </div> 
    </Router>
    
  );
}

export default App;
