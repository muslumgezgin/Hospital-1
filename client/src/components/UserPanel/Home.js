//Home.js
import React, { Component } from 'react';

import "../UserStyling/home.css";

 import {name} from'../UserStyling/home.js'

import { $, jQuery} from "jquery";
import {env} from "jsdom";

// const $ = require("jquery");


class Home extends Component {






    componentDidMount = () => {
    
  
    name();
    
    }
    render() {

        return (
            <div id="wrapper">
                <div id="carousel">
                    <img src={require(`../UserStyling/tiger.jpg`)}  />
                    <img src={require(`../UserStyling/Nemo-Seagulls.jpg`)}  />
                    <img src={require(`../UserStyling/MVC.png`)} />
                    <img src={require(`../UserStyling/tiger.jpg`)} />
                    <img src={require(`../UserStyling/Nemo-Seagulls.jpg`)} />
                    <img src={require(`../UserStyling/MVC.png`)} />
                </div>
                <a id="prev" href="#"></a>
                <a id="next" href="#"></a>
            <div id="pager"></div>
            </div>
        );
    }
}

export default Home;