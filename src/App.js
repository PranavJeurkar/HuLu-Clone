import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';
import requests from "./request";

function App() {
  const [selectedOption, setselectedOption] = useState(requests.fetchTrending);
  return (
    <div className="App">
      <Header />
      <Nav setselectedOption={setselectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
