"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'react-md';
import { SearchHeader } from '../components/SearchHeader';
import {RestaurantDetail} from "../components/RestaurantDetail";
import { SponsoredCard} from "../components/SponsoredCard";

export class RestaurantDetailsView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const sponsored = [
            {
                id: 1,
                name: "EssZimmer",
                address: "Am Olympiapark 1 | BMW Welt, 80809 Munich",
                contact: "+49 89 358991814",
                cuisines: "European, Central European, International",
                averageCost: "300",
                openingHours: "10 AM to 11 PM",
                averageRating: "4",
                recommendedDishes: "",
                homeDelivery: "true",
                outdoorSeating: "true",
                buffet: "true"
            },
            {
                id: 2,
                name: "Schwarzreiter Tagesbar & Restaurant",
                address: "Maximilianstr. 17, 80539 Munich",
                contact: "+49 89 21252125",
                cuisines: "German, European, Diner",
                averageCost: "300",
                openingHours: "9 AM to 8 PM",
                averageRating: "3",
                recommendedDishes: "",
                homeDelivery: "true",
                outdoorSeating: "true",
                buffet: "true"
            }
        ]
        var sponsoredRestaurants = [];
        for(var i=0;i<sponsored.length;i++){
            // push the component to elements
            sponsoredRestaurants.push(<SponsoredCard key={sponsored[i].id} data={ sponsored[i]} history={this.props.history } />);
        }
        const RESTAURANT =
            {
                id: 1,
                name: "EssZimmer",
                address: "Am Olympiapark 1 | BMW Welt, 80809 Munich, Bavaria, Germany",
                contact: "+49 89 358991814",
                cuisines: "European, Central European, International",
                averageCost: "300",
                openingHours: "10 AM to 11 PM",
                averageRating: "4",
                recommendedDishes: "",
                homeDelivery: "true",
                outdoorSeating: "true",
                buffet: "true"
            };
        return(
            <div>
               <SearchHeader />
                <div className="container">
                    <div className="innerDiv">
                        <RestaurantDetail data={RESTAURANT}/>
                    </div>
                    <div className="innerDiv">
                        {sponsoredRestaurants}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(RestaurantDetailsView);
