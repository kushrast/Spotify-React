import React, { Component } from 'react';
import "./App.css";
import ArtistCard from "./artist_card";

class App extends Component {
  render() {
    return (
      <div class="container">
        <ArtistCard></ArtistCard>
        <ArtistCard></ArtistCard>
        <ArtistCard></ArtistCard>
      </div>
    );
  }
}

export default App;
