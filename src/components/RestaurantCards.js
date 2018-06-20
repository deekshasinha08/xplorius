"use strict";
import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Card, CardTitle, CardText, List, ListItem, Divider, CardActions, Button } from 'react-md'

export class RestaurantCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return(
                <Card key={data.id} className="cardDiv">

                    <CardTitle title={data.name} subtitle={data.address } avatar={<img src={'https://i0.wp.com/brunchy.ae/wp-content/uploads/2017/09/kanpai_lounge__restaurant.jpg'} className="icon"/>}></CardTitle>
                    <Divider />
                    <List className="md-list--menu">
                        <ListItem primaryText={'Cuisines:'} secondaryText={data.cuisines} primaryTextClassName={'md-font-bold'} />
                        <ListItem primaryText={'Average Cost for 2:  '} secondaryText={data.averageCost} primaryTextClassName={'md-font-bold'}/>
                        <ListItem primaryText={'Opening Time:  '} secondaryText={data.openingHours} primaryTextClassName={'md-font-bold'}/>
                        <ListItem primaryText = {'Recommended Dishes:  '} secondaryText={ data.recommendedDishes} primaryTextClassName={'md-font-bold'}/>
                    </List>
                    <CardActions>
                        <Button raised onClick= {() => this.props.history.push('/restaurant')} className="button"  >Menu</Button>
                        <Button raised className="button">Order</Button>
                        <Button raised className="button">Reserve</Button>
                    </CardActions>
                </Card>
        );
    }
}
export default withRouter(RestaurantCards);
