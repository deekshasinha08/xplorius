"use strict";

import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Button, SelectField, SVGIcon, TextField } from 'react-md';
import arrowDropDown from '../Assets/drop-down-arrow.svg';


const icon = <SVGIcon use={arrowDropDown} />;
const STRING_ITEMS = ['Sendlinger Tor', 'Marienplatz'];

export class RestaurantSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="md-grid">
                <SelectField
                    id="select-field"
                    placeholder="Select a Location"
                    className="md-selection-control-label"
                    menuItems={STRING_ITEMS}
                    position={SelectField.Positions.BELOW}
                    dropdownIcon={icon}
                />
                <TextField id="placeholder-only-title" placeholder="Enter Restaurant Name" className="md-cell md-cell--bottom" />
                <Button raised  className="md-btn--toolbar md-background--secondary" iconClassName="fa fa-search" onClick={ () => this.nextPath('/search')}>Search</Button>
            </div>
        );
    }
}

export default withRouter(RestaurantSearch);