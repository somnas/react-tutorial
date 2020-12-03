import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Kristoffer", age: 28},
      {name: "Eriksson", age: 30}
    ]
  };

  switchNameHandler = (newName) => {
  
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: "Eriksson", age: 30}
    ]});
  };
 
  render() {
    return (
      <div className="App">
        <Person 
          age={this.state.persons[0].age} 
          name={this.state.persons[0].name}
          click={this.switchNameHandler.bind(this, "Krille")}>My hobby: Photography
        </Person>
        <br/>
        <Person 
          age={this.state.persons[1].age}
          name={this.state.persons[1].name} />        
        <button onClick={this.switchNameHandler.bind(this, "Kricke")}>Switch Name</button>
      </div>
      );
    }
  } 
    


export default App;