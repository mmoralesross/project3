import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
    return (
        <Router>
            <Home />
            <div>
                <Switch>
                    <Route exact path={["/reactions"]} component={Home} />
                    <Route exact path={"/signup"} component={Profile} />
                    <Route exact path={"/profile/:id"} component={Signup} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;