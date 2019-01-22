import React, { Component } from 'react';
import "./App.css";
import ArtistCard, {NewArtistCard} from "./artist_card";
import {Switch, Route} from "react-router-dom";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/test" component={Test}/>
  </Switch>
)

const Home = () => (
  <div className="container">
    <ArtistCard></ArtistCard>
    <ArtistCard></ArtistCard>
    <ArtistCard></ArtistCard>
    <NewArtistCard></NewArtistCard>
  </div>
)

const Test = () => (
  <span>Welcome to the Test</span>
)

export default App;
