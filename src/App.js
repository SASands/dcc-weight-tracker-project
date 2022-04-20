import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

  const[entries, setEntries] = useState([{weight: 218, date: '04/19/2022'} , {weight: 216, date: '04/25/2022'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm addNewEntry={addNewEntry}/>
    </div>
  );
}

export default App;
