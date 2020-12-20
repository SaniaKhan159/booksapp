import React from 'react';
import Books from './books.js';

function App() {
  return (
    <div>
      <Books firstCol="Stories Book"/>
      <Books secondCol="History Book"/>
      <Books thirdCol="Novels Book"/>
      <Books fourthCol="General Knowledge Book"/>
    </div>
  );
}

export default App;
