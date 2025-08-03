import React from 'react';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <Counter />
      <Welcome />
      <SyntheticEvent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
