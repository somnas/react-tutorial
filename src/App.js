import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="app">
      <Person name="Jens" Age="12" />
      <Person />
      <Person />
    </div>
  );
}

export default App;
