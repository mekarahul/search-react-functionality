import './App.css';
import Cities from './Components/Cities';
import { CitiesProvider } from './Context/CitiesContext';

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  return (
    <CitiesProvider>
    <div className="App">
      <div className='app-container'>
        <Cities/>
      </div>
      {AddLibrary('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')}
    </div>
    </CitiesProvider>
  );
}

export default App;
