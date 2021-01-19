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
import bot from "../src/images/Riva_Icon.gif";

import React, { useEffect, useState } from "react";
function App() {
    let [showChat, setShowChat] = useState(false);

    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }

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
          <div className="bot">
              <div style={{ display: showChat ? "" : "none" }}>
                  <SimpleForm></SimpleForm>
              </div>
              {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
              <div>
                  {!showChat
                      ? 
                      <button className="btn" onClick={() => startChat()}>Click to chat... </button>
                      : <button className="btn" onClick={() => hideChat()}>Click to hide... </button>}
              </div>
          </div>
    </div>
  );
}

export default App;
