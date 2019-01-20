import React, { Component } from 'react';
import {Card, Elevation, Button} from "@blueprintjs/core";
import "./App.css";

class ArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listenedTo: "Never"
        };
    }
    updateListenedTo = (e) => {
        this.setState((state) => {
            return {listenedTo: "Today"};
          });
    }
  render() {
    return (
    <Card interactive={true} elevation={Elevation.TWO} className="artist-card">
        <div class="row_container">
            <div class="artist">
                <img src="http://www.wethefest.com/uploads/lineups/louis-the-child_MfIkG7Tjpw.jpeg" id="artist_img"/>
                <span id="artist_name">Louis the Child</span>
            </div>
            <span> Last listened to: {this.state.listenedTo}</span>
            <Button large="True" intent="success" onClick={this.updateListenedTo}>Update</Button>
        </div>
    </Card>
    );
  }
}

export default ArtistCard;
