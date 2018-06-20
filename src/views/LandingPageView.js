"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import WebsiteInfo from '../components/WebsiteInfo';

export class LandingPageView extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <div>
                <Header />
                <WebsiteInfo />
            </div>
        );
    }
}
export default withRouter(LandingPageView);

