import logo from './logo.svg';
import './App.scss';
// importing Login page components
import { Login, Register } from "./Components/Login/indexLogin";
// importing Home page components
import { Home } from "./Components/Home/indexHome"
import { render } from '@testing-library/react';
// importing Routing libraries
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route path="/home" component={ Home }/>
      <Route path="/login" component={ Login }/>
      <Route path="/register" component= { Register }/>

    </Router>
  );
}

export default App;

//import { Router, Route,} from "react-router";
// Old V3 Method
/*
<Router>
  <Route path="login" component={ Login }/>
  <Route path="register" component={ Register }/>
  <Route path="home" component={ Home }/>
</Router>
*/

// No Routing Code
/*
<Login/> <Register/>
<Home/>
*/