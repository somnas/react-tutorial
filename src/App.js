import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Kristoffer", age: 28},
      {name: "Eriksson", age: 30}
    ]
  }

  render() {
    return (
      <div className="App">
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}>My hobby: Photography</Person>
        <br/>
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name} />
        <button>Switch Name</button>
      </div>
      );
    }
  }





export default App;
