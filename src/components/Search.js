import React, { Component } from "react";
import Filter from "./Filter";

class Search extends Component {
  sendQueryFunction = (queryInput) => {
    this.props.updateAppQuery(queryInput);
  };

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#addModal"
        >
          Change filters for opportunities
        </button>

        <div className="modal fade" id="addModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addModal">
                  Add an opportunity
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Filter updateSearchQuery={this.sendQueryFunction} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
