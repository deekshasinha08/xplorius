"use strict";

import React from 'react';
import Header from '../components/Header';
import WebsiteInfo from '../components/WebsiteInfo';

export class LandingPageView extends React.Component{
    constructor(props) {
        super(props);
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
