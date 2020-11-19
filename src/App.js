import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="app">
      <Person name="Jens" age="12" />
      <Person name="Kristoffer" age="24" />
      <Person />
    </div>
  );
}

export default App;
