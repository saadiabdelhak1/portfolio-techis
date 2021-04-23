import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Links';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <NavBar/>
        <switch>
          <Route exact path="/" component={Home} /> 
        </switch>
      <Footer/>
      <Projects/>
      </div> 
    </Router>
    
  );
}

export default App;
