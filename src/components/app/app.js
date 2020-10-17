import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import './app.css';
import './media.css';
import SignUp from '../sign-up';

export default class App extends Component {

    

    render() {

        return(

            <Router>
                <div className="app">
                    <section class="hero-section">
                        <AppHeader/>
                        <div class="brand-title">
                            <h1 class="brand-title__text">
                                Moliya Studiyasi
                            </h1>
                        </div>
                    </section>
                    <AppFooter/>
                    <Switch>
                        
                        <Route path="/sign-up">
                            <SignUp />
                        </Route>
                        {/* <Route path="/">
                            <App/>
                        </Route> */}
                    </Switch>
                </div>
            </Router>
            
        )
    }
};

