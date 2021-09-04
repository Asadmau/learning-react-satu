import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import fecthApi from "../pages/FecthApi";
import CoronaVirusApi from "../pages/CoronaVirusApi";
function Nav() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href=".">
            Logo
          </a>
          <div className="py-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fecthapi">
                  Fetch Api News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/coronaapi">
                  Corona API
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/fecthapi" component={fecthApi}></Route>
        <Route path="/coronaapi" component={CoronaVirusApi}></Route>
      </Switch>
    </Router>
  );
}

export default Nav;
