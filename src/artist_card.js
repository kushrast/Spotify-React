import React, { Component } from 'react';
import {Card, Elevation} from "@blueprintjs/core";
import {H1} from "@blueprintjs/core";
import "./App.css";

class ArtistCard extends Component {
  render() {
    return (
    <Card interactive={true} elevation={Elevation.TWO} className="artist-card">
        <div class="row_container">
            <div class="artist">
                <img src="http://www.wethefest.com/uploads/lineups/louis-the-child_MfIkG7Tjpw.jpeg" id="artist_img"/>
                <span id="artist_name">Louis the Child</span>
            </div>
            <H1>HI</H1> 
            <H1>HI</H1>
        </div>
    </Card>
    );
  }
}

export default ArtistCard;
