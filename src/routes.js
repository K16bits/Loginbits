import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from "./pages/Home"
import Profile from "./pages/Profile"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};