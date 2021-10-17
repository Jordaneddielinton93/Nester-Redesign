
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
import SignUp from '../Pages/02-SignUpPage/SignUp';
import FireUserChecker from '../FireBase/FireUserChecker';
import SignIn from '../Pages/02-SignInPage/SignIn';

export let pageContext= React.createContext()

function App() {
  useEffect(()=>{

    Aos.init({duration:2000})
  },[])

  let [U_id]= FireUserChecker()
  return (
    <div className="App">
      <pageContext.Provider value={U_id}>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
      </Router>
      </pageContext.Provider>
    </div>
  );
}

export default App;
