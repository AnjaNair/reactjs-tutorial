import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
    .catch(error => console.log("I goofed up the api"));
  }
  render() {
    return(
    <div className="App">
      <CardList monsters={ this.state.monsters }>
      </CardList>
    </div>
    )
  }
}

export default App;
