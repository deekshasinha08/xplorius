"use strict";

import React from 'react';
import { withRouter }  from 'react-router-dom';
import RestaurantSearch from './RestaurantSearch';
import { Avatar, FontIcon } from 'react-md'
import logo from '../Assets/logo.jpg'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
                <div className="avatar">
                    <Avatar icon={<FontIcon iconClassName="fa fa-rocket" />} />
                </div>

                <div className="searchBar">
                    <img className="logo" src={logo}/>
                    <RestaurantSearch classname="searchBar"/>
                </div>
            </div>

        );
    }
}

export default withRouter(Header);