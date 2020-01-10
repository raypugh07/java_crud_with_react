import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';
import { CookiesProvider } from 'react-cookie'; // allows you to read the csrf cookie and send it back as a header



class App extends Component {
    render() {
        return (
            <CookiesProvider>
            <Router>
                <Switch>

                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/groups' exact={true} component={GroupList}/>
                    <Route path='/groups/:id' component={GroupEdit}/>

                </Switch>
            </Router>
            </CookiesProvider>
        )
    }
}

export default App;