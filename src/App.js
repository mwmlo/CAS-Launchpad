import React from 'react';
import './App.css';
import db from "./firebase"
import Table from './components/Table';
import Search from './components/Search';
import AddExperience from './components/AddExperience';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: []
    }

    this.updateQuery = this.updateQuery.bind(this)
  }

  updateQuery(filter) {
    this.setState({query: filter})
  }

  render() {

    return (
      <div className="App">

        <div className="left">
          <h1>CAS Launchpad</h1>
          <AddExperience />
        </div>

        <div className="right">
          <Search query={this.state.query} updateQuery={this.updateQuery}/>
          <Table query={this.state.query} />
        </div>

      </div>
    );
  }
}

export default App;
