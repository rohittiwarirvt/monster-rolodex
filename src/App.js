import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchField } from './component/search-field/search-field.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ""
    }
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = e => {
     this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
   // console.log(monster);
   // console.log(searchField);

    const filteredMonster = monsters.filter( monster => (
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));
    return (
      <div className="App">
        <h1>Rohit's Monster Rolodex</h1>
        <SearchField placeholder="Search monsters" handleChange ={this.handleChange} > </SearchField>
        <CardList monster={filteredMonster}>
          </CardList>

      </div>
    );
  }
}

  

export default App;