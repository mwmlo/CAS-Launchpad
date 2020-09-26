import React from 'react';
import './App.css';
import Table from './components/Table';
import ToggleAdd from './components/ToggleAdd';
import AddExperience from './components/AddExperience';

function App() {

  return (
    <div className="App">

      <div className="left">
        <h1>CAS Launchpad</h1>
        <AddExperience/>
      </div>

      <div className="right">
        <ToggleAdd/>
        <Table/>
      </div>

    </div>
  );
}

export default App;
