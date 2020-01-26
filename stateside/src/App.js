import React from 'react';
import './App.css';
import LessText from './LessText';
import Stepped from './Stepped';

function App() {
  return (
    <div className="App">
      <LessText text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal,
      and just keep taking the next step
      towards completing it.`}
    maxLength={35}/>
    <Stepped />
    </div>
  );
}

export default App;
