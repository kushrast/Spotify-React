import React, { Component } from 'react';
import "./App.css";
import ArtistCard, {NewArtistCard} from "./artist_card";
import {Switch, Route} from "react-router-dom";
import axios from 'axios';

const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
const redirect_uri = process.env.redirect_uri;


const App = () => (
  <Switch>
    <Route exact path="/" component={Authenticate}/>
    <Route path="/main" component={Home}/>
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

const Authenticate = () => {
  var scopes = 'user-read-private user-read-email';
  axios.get('https://accounts.spotify.com/authorize', {
    params: {
      client_id: client_id,
      response_type: "code",
      redirect_uri: redirect_uri,
      scope: scopes
    }
  })
    .then(response => console.log(response))
    .catch(function (error) {
      console.log(error);
    });
}

export default App;
