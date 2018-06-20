"use strict";

import React from 'react';
import { withRouter }  from 'react-router-dom';
import { RestaurantSearch } from '../components/RestaurantSearch';


export class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <h1 className="xploriusTitle"> Xplorius </h1>
                <RestaurantSearch />
            </div>

        );
    }
}
export default withRouter(SearchHeader);