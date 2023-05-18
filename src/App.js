import './App.css';
import Chart from './components/Chart/Chart';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <Chart></Chart>
    </div>
  );
}

export default App;
