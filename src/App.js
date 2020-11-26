import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Person age="35" name="Kristoffer">My hobby: Photography</Person>
        <br/>
        <Person age="30" name="Eriksson" />
        <button>Switch Name</button>
      </div>
      );
    }
  }





export default App;
