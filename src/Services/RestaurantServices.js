"use strict";

import HttpService from './HttpService';
import MockData from '../MockData/mock';

export default class RestaurantServices {

    constructor(){
    }

    static baseURL() {return "http://localhost:8000/movies" }

    static getRestaurant(){
        /*return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });*/
        return MockData.
    }
