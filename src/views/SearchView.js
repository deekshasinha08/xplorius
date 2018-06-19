"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle } from 'react-md';
import { RestaurantCards } from '../components/RestaurantCards';
import  { SponsoredCard } from '../components/SponsoredCard';
import {Filter} from "../components/Filter";


export class SearchView extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const RESTAURANTS = [
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
            },
            {
                id: 2,
                name: "Schwarzreiter Tagesbar & Restaurant",
                address: "Maximilianstr. 17, 80539 Munich, Bavaria, Germany",
                contact: "+49 89 21252125",
                cuisines: "German, European, Diner",
                averageCost: "300",
                openingHours: "9 AM to 8 PM",
                averageRating: "3",
                recommendedDishes: "",
                homeDelivery: "true",
                outdoorSeating: "true",
                buffet: "true"
            },
            {
                id: 3,
                name: "Werneckhof by Geisel",
                address: "Werneckstr. 11, 80802 Munich, Bavaria, Germany",
                contact: "+49 89 38879568",
                cuisines: "Fusion, Vegetarian Friendly",
                averageCost: "300",
                openingHours: "2 PM to 10 PM",
                averageRating: "3",
                recommendedDishes: "",
                homeDelivery: "true",
                outdoorSeating: "true",
                buffet: "true"
            }
        ];
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
        var restaurants=[]; var sponsoredRestaurants = []
        for(var i=0;i<RESTAURANTS.length;i++){
            // push the component to elements
            restaurants.push(<RestaurantCards key={RESTAURANTS[i].id} data={ RESTAURANTS[i]} history={this.props.history } />);
        }
        for(var i=0;i<sponsored.length;i++){
            // push the component to elements
            sponsoredRestaurants.push(<SponsoredCard key={sponsored[i].id} data={ sponsored[i]} history={this.props.history } />);
        }
        return (

            <div className="container">
                <h2>Search Results for: </h2>
                <div className="innerDiv">
                    <Filter></Filter>
                </div>
                <div className="innerDiv">
                    {restaurants}
                </div>
                <div className="innerDiv">
                    {sponsoredRestaurants}
                </div>
            </div>
        );
    }

}
export default withRouter(SearchView);
