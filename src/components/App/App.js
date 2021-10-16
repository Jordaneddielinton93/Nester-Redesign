
import './/App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"
import LandingPage from '../Pages/01-LandingPage/LandingPage';
import NavBar from '../Navbar/NavBar';
function App() {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
