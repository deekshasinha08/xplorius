"use strict";
import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Card, CardTitle, CardText, List, ListItem, Divider, Subheader, FontIcon, Avatar  } from 'react-md'

export class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Card>
            <CardTitle title="Filters"  avatar={<FontIcon iconClassName="fa fa-filter"></FontIcon>}></CardTitle>
            <Divider />
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Sort By" />
                <ListItem primaryText="Ratings" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Cost for 2" leftAvatar={<Avatar random>S</Avatar>} />
              </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Category" />
                <ListItem primaryText="Cafe" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Dining" leftAvatar={<Avatar random>S</Avatar>} />
                <ListItem primaryText="Delivery" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Bakery" leftAvatar={<Avatar random>S</Avatar>} />
            </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Location" />
                <ListItem primaryText="Sendlinger Tor" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Marienplatz" leftAvatar={<Avatar random>S</Avatar>} />
                <ListItem primaryText="Munchner Freiheit" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Garching" leftAvatar={<Avatar random>S</Avatar>} />
            </List>
            <List className="md-paper md-paper--3">
                <Subheader primaryText="Other Filters" />
                <ListItem primaryText="Buffet" leftAvatar={<Avatar random>L</Avatar>} />
                <ListItem primaryText="Outdoor Seating" leftAvatar={<Avatar random>S</Avatar>} />
               </List>
        </Card>
        );
    }
}
export default withRouter(Filter)
