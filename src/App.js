import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Roster from './Roster';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: []
    };
  }

  componentDidMount() {
    fetch('https://assets.gpshopper.com/jc/android_eval.json')
      .then(this.updateRoster);
  }

  updateRoster = (response) => {
    response.json().then(data => {this.setState({roster: data.roster});});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Roster</p>
        </header>
        <article>
          <Roster roster={this.state.roster} />
        </article>
      </div>
    );
  }
}
