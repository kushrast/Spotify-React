import React, { Component } from 'react';
import {Button, Card, Elevation} from "@blueprintjs/core";

class App extends Component {
  render() {
    return (
      <Card interactive={true} elevation={Elevation.TWO}>
        <h5><a href="#">Card heading</a></h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
    );
  }
}

export default App;
