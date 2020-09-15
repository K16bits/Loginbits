import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Subscribe from "./pages/Subscribe"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/subscribe" component={Subscribe} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};
