import React from 'react';
import './App.css';
import db from "./firebase"
import Table from './components/Table';
import Search from './components/Search';
import AddExperience from './components/AddExperience';

class App extends React.Component {

  state = {query: []}

  updateAppQueryFunction = (filter) => {
    this.setState({query: filter})
  }

  render() {

    console.log("Query state:", this.state.query)

    return (
      <div className="App">

        <div className="left">
          <h1>CAS Launchpad</h1>
          <AddExperience />
        </div>

        <div className="right">
          <Search updateAppQuery={this.updateAppQueryFunction}/>
          {this.state.query}
          <Table query={this.state.query} />
        </div>

      </div>
    );
  }
}

export default App;
