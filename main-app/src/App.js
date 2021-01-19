import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PartnersAvailable from "./Components/PartnersAvailable";
import DynamicForms from "./Components/DynamicForms";
import Testing from "./Components/Testing";
import NavBarComponent from "./Components/NavBarComponent";
import Error from "./Components/Error"
import DynamicQuotes from "./Components/DynamicQuotes";
import SimpleForm from "./Components/SimpleForm"


import React, { useEffect, useState } from "react";
function App() {


  return (
    <div className="app">
      <NavBarComponent/>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            exact
            path="/insurance/:id"
            component={PartnersAvailable}
          ></Route>
          <Route
            exact
            // path="/insurance/:productName/:name"
            path="/insurance/:product/:name/form"
            component={DynamicForms}
          ></Route>
                    <Route
            exact
            path="/insurance/get/Quotes"
            component={DynamicQuotes}
          ></Route>
            <Route
            exact
            path="/testing"
            component={Testing}
          ></Route>
          <Route component={Error}/>
                 
        </Switch>
          </Router>
        
    </div>
  );
}

export default App;
