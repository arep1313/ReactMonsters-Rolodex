import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      string: 'hola',
      cambio: 'hola2',
      monsters: [],
      searchField: ''
    };    
  }

  componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters  : users}));

  }

  /*async fetchMonsters() {
    /*var res = [];  
    res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //this.setState({monsters: res});
    console.log(res);
    this.setState({monsters : res});


  };*/
  

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={e=>(this.setState({searchField: e.target.value}))}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
