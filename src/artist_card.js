import React, { Component } from 'react';
import {Card, Elevation, Button} from "@blueprintjs/core";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import "./App.css";

class ArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listenedTo: null
        };
    }
    updateListenedTo = (e) => {
        this.setState((state) => {
            return {listenedTo: new Date()};
          });
    }

    renderDate = () => {
        if (this.state.listenedTo == null) {
            return "Never";
        } else {
            if (this.state.listenedTo.getTime() === new Date().getTime()) {
                return "Today";
            }
            return this.state.listenedTo.toDateString();
        }
    }

  render() {
    return (
    <Card interactive={true} elevation={Elevation.TWO} className="artist-card">
        <div class="row_container">
            <div class="artist">
                <img src="http://www.wethefest.com/uploads/lineups/louis-the-child_MfIkG7Tjpw.jpeg" id="artist_img"/>
                <span id="artist_name">Louis the Child</span>
            </div>
            <span> Last listened to: {this.renderDate()}</span>
            <Button large="True" intent="success" onClick={this.updateListenedTo}>Update</Button>
        </div>
    </Card>
    );
  }
}

class NewArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: false
        };
    }

    switchView = () => {
        this.setState((state) => {
            return {form: !this.state.form};
          });
    }
    render() {
        if (!this.state.form) {
            return (
                <Card interactive={true} elevation={Elevation.TWO} className="artist-card" onClick={this.switchView}>
                    <div class="row_container">
                        <Icon icon={IconNames.PLUS} iconSize="60" intent={Intent.SUCCESS}></Icon>
                    </div>
                </Card>
            );
        } else {
            return (
                <Card interactive={true} elevation={Elevation.TWO} className="artist-card">
                <div class="form_container">
                    <Button onClick={this.switchView} id="form_back" className="right_space">Back</Button>
                    <div className="bp3-input-group .modifier right_space">
                        <span class="bp3-icon bp3-icon-search"></span>
                        <input class="bp3-input" type="search" placeholder="Search input" dir="auto" />
                    </div>
                    <Button onClick={this.switchView} id="form_enter" intent={Intent.SUCCESS}>Go</Button>
                </div>
            </Card>
            );
        }
    }
}

export {NewArtistCard};
export default ArtistCard;
