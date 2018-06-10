"use strict";

import React from 'react';
import { withRouter }  from 'react-router-dom';
import icon1 from '../Assets/icon-01.png';
import icon2 from '../Assets/icon-02.png';
import icon3 from '../Assets/icon-03.png';
import icon4 from '../Assets/icon-04.png';
import icon5 from '../Assets/icon-05.png';
import icon6 from '../Assets/icon-06.png';
import { Card, CardTitle } from 'react-md'

class WebsiteInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="md-grid siteInfo">
                <div className="md-cell--4-desktop">
                    <img src={icon1}/>
                    <p>Check out every </p>
                    <p>Restaurant in town</p>
                </div>
                <div className="md-cell--4-desktop">
                    <img src={icon2}/>
                    <p>Build your order</p>
                    <p>from available menu</p>
                </div>
                <div className="md-cell--4-desktop">
                    <img src={icon3}/>
                    <p>Follow foodies for</p>
                    <p>trusted reviews</p>
                </div>
                <div className="md-cell--4-desktop">
                    <img src={icon4}/>
                    <p>Explore restaurants that</p>
                    <p>deliver to your doorstep</p>
                </div>
                <div className="md-cell--4-desktop">
                    <img src={icon5}/>
                    <p>Follow your orders with</p>
                    <p>real-time notifications</p>
                </div>
                <div className="md-cell--4-desktop">
                    <img src={icon6}/>
                    <p>Enjoy your meal and rate</p>
                    <p>your delivery experience</p>
                </div>
            </div>
        );
    }
}
export default withRouter(WebsiteInfo);
