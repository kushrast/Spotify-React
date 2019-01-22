import React, { Component } from 'react';
import {Card, Elevation, Button} from "@blueprintjs/core";
import { Icon, Intent, MenuItem} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Suggest } from "@blueprintjs/select";
import { artistSelectProps, ArtistSearchItem, search_results } from "./artist_search";
import axios from 'axios';

import "./App.css";

const ArtistSuggest = Suggest.ofType<ArtistSearchItem>();

interface ArtistCardProps {
}
  
interface ArtistCardState {
    listenedTo: Date | null
}

class ArtistCard extends Component<ArtistCardProps, ArtistCardState> {
    constructor(props: ArtistCardProps) {
        super(props);
        this.state = {
            listenedTo: null
        };
    }
    updateListenedTo = (e: any) => {
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
        <div className="row_container">
            <div className="artist">
                <img src="http://www.wethefest.com/uploads/lineups/louis-the-child_MfIkG7Tjpw.jpeg" id="artist_img"/>
                <span id="artist_name">Louis the Child</span>
            </div>
            <span> Last listened to: {this.renderDate()}</span>
            <Button large={true} intent="success" onClick={this.updateListenedTo}>Update</Button>
        </div>
    </Card>
    );
  }
}

interface NewArtistProps {
    form: boolean,
    artist: ArtistSearchItem | null;
}
class NewArtistCard extends Component<{}, NewArtistProps> {
    constructor(props: NewArtistProps) {
        super(props);
        this.state = {
            form: false,
            artist: null
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
                    <div className="row_container">
                        <Icon icon={IconNames.PLUS} iconSize={60} intent={Intent.SUCCESS}></Icon>
                    </div>
                </Card>
            );
        } else {
            return (
                <Card interactive={true} elevation={Elevation.TWO} className="artist-card">
                <div className="form_container">
                    <Button onClick={this.switchView} id="form_back" className="right_space">Back</Button>
                    <ArtistSuggest
                    {...artistSelectProps}
                    inputValueRenderer={this.renderInputValue}
                    items={[]}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    onItemSelect={this.handleValueChange}
                    />
                    <Button onClick={this.switchView} id="form_enter" intent={Intent.SUCCESS}>Go</Button>
                </div>
            </Card>
            );
        }
    }

    private renderInputValue = (artist: ArtistSearchItem) => artist.name;
    private handleValueChange = (artist: ArtistSearchItem) => this.setState({ artist });

    private querySpotify = (query: string, items: ArtistSearchItem[]) => {
    }
}

export {NewArtistCard};
export default ArtistCard;
