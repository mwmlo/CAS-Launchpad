import React from "react";
import "./App.css";
import Table from "./components/Table";
import Search from "./components/Search";
import AddExperience from "./components/AddExperience";

class App extends React.Component {
  state = { query: [], search: false };

  updateAppQuery = (filter) => {
    this.setState({ query: filter, search: true });
    if (filter.length < 1) {
      this.setState({ search: false });
    }
  };

  render() {
    let parameters = this.state.query.join(", ");

    return (
      <div className="App">
        <div className="left">
          <h1>
            <span role="img" aria-label="magnifying-glass">🔍</span> CAS Launchpad
          </h1>
          <h3 className="showMobile">
            Scroll down to see all opportunities listed
          </h3>
          <AddExperience />
        </div>

        <div className="right">
          <Table query={this.state.query} />
          <div>
            <div className={this.state.search ? "showSearch" : "hideSearch"}>
              You searched for: {parameters}
            </div>
            <Search updateAppQuery={this.updateAppQuery} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
