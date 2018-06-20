"use strict";
import React from 'react';

import { withRouter }  from 'react-router-dom';
import { Card, CardTitle, CardText, Divider, Subheader, FontIcon, List, ListItem, ListItemControl, Checkbox, } from 'react-md';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Card className="cardDiv">
            <CardTitle title="Filters"  avatar={<FontIcon iconClassName="fa fa-filter"></FontIcon>}></CardTitle>
            <Divider />
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Sort By" />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-1"
                            name="list-control-primary"
                            label="Ratings"
                            defaultChecked
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Cost for 2"
                        />
                    )}
                />
              </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Category" />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Cafe"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Dining"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Delivery"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Bakery"
                        />
                    )}
                />
            </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Location" />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Sendlinger Tor"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Marienplatz"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Munchner Freiheit"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Garching"
                        />
                    )}
                />
            </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Other Filters" />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Buffet"
                        />
                    )}
                />
                <ListItemControl
                    primaryAction={(
                        <Checkbox
                            id="list-control-2"
                            name="list-control-primary"
                            label="Outdoor Seating"
                        />
                    )}
                />
               </List>
        </Card>

        );
    }
}
export default withRouter(Filter)
