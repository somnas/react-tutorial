import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Kristoffer", age: 28},
      {name: "Eriksson", age: 30}
    ]
  });

  const switchNameHandler = () => {
    //console.log("Clicked");
    //DON'T DO THIS: personsState.persons[0].name = "Krille";
    setPersonsState({
      persons: [
      {name: "Krille", age: 28},
      {name: "Eriksson", age: 30}
    ]});
  };
 
    return (
      <div className="App">
        <Person age={personsState.persons[0].age} name={personsState.persons[0].name}>My hobby: Photography</Person>
        <br/>
        <Person age={personsState.persons[1].age} name={personsState.persons[1].name} />        
        <button onClick={switchNameHandler}>Switch Name</button>
      </div>
      );
    }


export default App;

/* state = {
    persons: [
      {name: "Kristoffer", age: 28},
      {name: "Eriksson", age: 30}
    ]
  }

  switchNameHandler = () => {
    //console.log("Clicked");
    //DON'T DO THIS: personsState.persons[0].name = "Krille";
    this.setState({
      persons: [
      {name: "Krille", age: 28},
      {name: "Eriksson", age: 30}
    ]})
  } */