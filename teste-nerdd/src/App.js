import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Game from './Game';
import NotFound from './NotFound';

class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      nome: ''
    }
  }

  handleChange(event) {
    const nome = event.target.name
    const value = event.target.value
    this.setState({[nome]: value})
  }
  
  render () {
  return (
    <Switch>  
      <Route exact path='/' render={() => <Home valor={this.state.nome} handleChange={this.handleChange} />}></Route>
      <Route path='/teste' render={() => <Game nome={this.state.nome} />}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
}
}

export default App;
