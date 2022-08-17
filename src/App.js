import './App.css';
import Users from './Components/Users';
import { UsersProvider } from './Context/UsersContext';

function App() {
  return (
    <UsersProvider>
    <div className="App">
      <header className="App-header">
      <Users/>
      </header>
    </div>
    </UsersProvider>
  );
}

export default App;
