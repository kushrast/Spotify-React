import React, { Component } from 'react';
import "./App.css";
import ArtistCard, {NewArtistCard} from "./artist_card";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ArtistCard></ArtistCard>
        <ArtistCard></ArtistCard>
        <ArtistCard></ArtistCard>
        <NewArtistCard></NewArtistCard>
      </div>
    );
  }
}

export default App;
