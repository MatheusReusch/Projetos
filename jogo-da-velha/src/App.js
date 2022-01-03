import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';


class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: ''
    }
  }
  
  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
  }

  render () {
  return (
    <BrowserRouter>
      <Route exact path='/' render={() => <Home value={this.state.name} handleChange={this.handleChange} />}></Route>
      <Route path='/game' render={() => <Game name={this.state.name} />}></Route>
    </BrowserRouter>
  );
 }
}

export default App;
