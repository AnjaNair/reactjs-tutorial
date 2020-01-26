import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
    .catch(error => console.log("I goofed up the api"));
  }
  render() {
    const { monsters, searchField } = this.state; //Destructuring
    const filteredMonster = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
    <div className="App">
      <input
        type='search'
        placeholder='search monsters'
        onChange={ e => {
          this.setState(
            { searchField : e.target.value }
          )
        }}
        />
      <CardList monsters={ filteredMonster }>
      </CardList>
    </div>
    )
  }
}

export default App;
