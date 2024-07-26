
//import everything (*) exported from the weatherService.js module and group inside a weatherService object
import * as weatherService from './services/weatherService';

const App = () => {

  const fetchData = async () => {

    const data = await weatherService.show('New York');

    console.log('Data:', data);
  };

  return (

    <main>

      <h1>Weather API</h1>

      <button onClick={fetchData}>Fetch Weather Data</button>

    </main>

  );
  
};

export default App;
