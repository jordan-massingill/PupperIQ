import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import FirstFive from './components/FirstFive';
import TrueFalse from './components/TrueFalse';
import axios from 'axios';
import {Route, withRouter} from 'react-router-dom';

class App extends Component {
  constructor() {
      super();
      this.state = {
        sheds: undefined,
        play: undefined,
        activity: undefined,
        affection: undefined,
        train: undefined,
        size: undefined,
        pets: undefined,
        maint: undefined,
        climate: undefined,
        perfectPup: undefined
       }
  }


  changeHandler = (event) => {
    const score = parseInt(event.target.value);
    this.setState({[event.target.name]: score});
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log("Hello from submitHandler");

    axios.post('http://localhost:8000/results', this.state).then(matches => {
      const matchScores = matches.data.map(pup => parseInt(pup.score));
      const lowScore = Math.min(...matchScores);
      console.log("LOW SCORE: ", lowScore);
      const perfectPup = matches.data.filter(pup => pup.score === lowScore);
      this.setState({ perfectPup: perfectPup[0] });
      this.props.history.push('/results');
      console.log(this.state);
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Header} />
        <Route exact path='/' render={props =>  <FirstFive {...props} change={this.changeHandler} />} />
        <Route exact path='/' render={props => <TrueFalse {...props} submit={this.submitHandler} change={this.changeHandler} />} />
        <Route exact path='/results' render={props => <Results {...props} pup={this.state.perfectPup} />} />
      </div>
    );
  }

}

export default withRouter(App);
