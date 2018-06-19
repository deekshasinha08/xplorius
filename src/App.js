"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {LandingPageView} from "./views/LandingPageView";
import  { SearchView } from "./views/SearchView";
import Style from './css/Style.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Xplorius',
            routes: [
                { component: LandingPageView, path: '/', exact: true},
                { component: SearchView, path: '/search' }
            ]
        };
    }
    componentDidMount() {
        document.title = this.state.title;
    }
    render() {
        return(
               <Router>
                   <Switch>
                       { this.state.routes.map((route, i) => (<Route key={i} {...route}/>)) }
                   </Switch>
               </Router>
        );
    }
}