import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="app">
      <Person name="Jens" Age="12" />
      <Person name="Kristoffer" Age="24" />
      <Person />
    </div>
  );
}

export default App;
