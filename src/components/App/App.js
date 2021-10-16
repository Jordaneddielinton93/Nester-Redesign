
import './/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from '../Pages/01-LandingPage/LandingPage';
import NavBar from '../Navbar/NavBar';
function App() {
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
