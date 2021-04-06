import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import BackgroundImg from "./AboutComponents/Background/BackgroundImg"
import BackgroundDetails from "./AboutComponents/BackgroundDetails/BackgroundDetails"
import NavBarAbout from "./AboutComponents/BackgroundDetails/NavBarAbout"
import Culture from "./AboutComponents/Culture/Culture"
const AboutPage = () => {
  return (
    <div className="container-fluid">
      <BackgroundImg />
      <NavBarAbout/>
        <Router>
          <Switch>
            <Route exact path="/about" component={BackgroundDetails}/>
            <Route exact path="/culture" component={Culture}/>
          </Switch>
        </Router>
    </div>
  );
};

export default AboutPage;
