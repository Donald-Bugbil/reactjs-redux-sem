import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './components/detailPostjsx';
import Dashboard from './components/dashboard';


const MainRouter = () => {

    return (
        <Router>
            <Switch>
                <Route path= '/post/:id'>
                    <DetailPage/>
                </Route>
            </Switch>
            <Switch>
                <Route path= '/dashboard'>
                    <Dashboard/>
                </Route>
           </Switch>
            <Switch>
                <Route exact path= '/'>
                    <App/>
                </Route>
            </Switch>
           
           
        </Router>
    )
}

export default MainRouter;