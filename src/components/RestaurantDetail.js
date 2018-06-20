"use strict";
import React from 'react';
import { withRouter }  from 'react-router-dom';
import { Card, CardTitle, CardText, List, ListItem, Divider, CardActions, Button, Media, MediaOverlay, Tabs, Tab, TabsContainer } from 'react-md'


export class RestaurantDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return(
            <div>
                <Card className="restaurantCard cardDiv">
                    <Media>
                        <img src={'https://i0.wp.com/brunchy.ae/wp-content/uploads/2017/09/kanpai_lounge__restaurant.jpg'} />
                        <MediaOverlay>
                            <CardTitle title={data.name} subtitle={data.address}/>
                        </MediaOverlay>
                    </Media>
                    <CardText>
                        <Card>
                            <List className="md-list--menu">
                                <ListItem primaryText={'Cuisines:'} secondaryText={data.cuisines} primaryTextClassName={'md-font-bold'} />
                                <ListItem primaryText={'Average Cost for 2:  '} secondaryText={data.averageCost} primaryTextClassName={'md-font-bold'}/>
                                <ListItem primaryText={'Opening Time:  '} secondaryText={data.openingHours} primaryTextClassName={'md-font-bold'}/>
                                <ListItem primaryText = {'Recommended Dishes:  '} secondaryText={ data.recommendedDishes} primaryTextClassName={'md-font-bold'}/>
                            </List>
                        </Card>
                    </CardText>
                    <TabsContainer panelClassName="md-grid" >
                        <Tabs tabId="simple-tab">
                            <Tab label="Menu">
                                <Card className="restaurantCard cardDiv">
                                    <CardText>

                                    </CardText>

                                </Card>
                            </Tab>
                            <Tab label="Photos">
                                <Card className="restaurantCard cardDiv">
                                    <CardText>

                                    </CardText>
                                </Card>
                            </Tab>
                            <Tab label="Reviews">
                                <Card className="restaurantCard cardDiv">
                                    <CardText>

                                    </CardText>
                                </Card>
                            </Tab>
                            <Tab label="Make Reservation">
                                <Card className="restaurantCard cardDiv">
                                    <CardText>

                                    </CardText>
                                </Card>
                            </Tab>
                        </Tabs>
                    </TabsContainer>

                </Card>



            </div>
        );
    }
}
export default withRouter(RestaurantDetail);