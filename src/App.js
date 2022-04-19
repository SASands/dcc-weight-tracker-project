import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'



function App() {

const[entries, setEntries] = useState([{weight: 218, date: '04/19/2022'} , {weight: 216, date: '04/25/2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}

export default App;
