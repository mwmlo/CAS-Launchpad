import React, { Component } from "react";

class Filter extends Component {
  state = {
    filters: [],
    subject: "",
    checkAllBoxes: null,
  };

  handleSubjectChange = (event) => {
    const subject = event.target.value;
    this.setState({ subject: subject });
  };

  handleCheckboxChange = (event) => {
    this.setState({ checkAllBoxes: null });

    const filters = this.state.filters;
    const target = event.target;

    const boxValue = target.type === "checkbox" ? target.checked : target.value;
    const boxName = target.name;

    if (!filters.includes(boxName) && boxValue) {
      filters.push(boxName);
    }
    if (filters.includes(boxName) && !boxValue) {
      filters.pop(boxName);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const filters = this.state.filters;
    if (this.state.subject !== "") {
      filters.push(this.state.subject);
    }

    this.props.updateSearchQuery(filters);
    this.setState({ filters: [], subject: "", checkAllBoxes: false });
  };

  render() {
    return (
      <div className="filter">
        <form onSubmit={this.handleSubmit}>
          <div className="category">
            <p>What CAS category does this experience count as?</p>
            <label>
              Creativity
              <input
                type="checkbox"
                id="creativity"
                name="Creativity"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Activity
              <input
                type="checkbox"
                id="activity"
                name="Activity"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Service
              <input
                type="checkbox"
                id="service"
                name="Service"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
          </div>

          <div className="outcomes">
            <p>CAS Learning Outcomes</p>
            <label>
              Strength & Growth
              <input
                type="checkbox"
                id="strength"
                name="Strength & Growth"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Challenge & Skills
              <input
                type="checkbox"
                id="challenge"
                name="Challenge & Skills"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Initiative & Planning
              <input
                type="checkbox"
                id="plan"
                name="Initiative & Planning"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Commitment & Perserverance
              <input
                type="checkbox"
                id="commit"
                name="Commitment & Perserverance"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Collaboration
              <input
                type="checkbox"
                id="collab"
                name="Collaboration"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Global Engagement
              <input
                type="checkbox"
                id="global"
                name="Global Engagement"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
            <label>
              Ethics of Choices & Actions
              <input
                type="checkbox"
                id="ethics"
                name="Ethics of Choices & Actions"
                onChange={this.handleCheckboxChange}
                checked={this.state.checkAllBoxes}
              />
            </label>
          </div>

          <p>Revelant university subjects</p>
          <select
            id="subjects"
            name="subjects"
            onChange={this.handleSubjectChange}
            value={this.state.subjects}
          >
            <option value="">N/A</option>
            <option value="Arts & Humanities">Arts & Humanities</option>
            <option value="Business, Law & Management">
              Business, Law & Management
            </option>
            <option value="Engineering & Technology">
              Engineering & Technology
            </option>
            <option value="Life Sciences & Medicine">
              Life Sciences & Medicine
            </option>
            <option value="Physical Sciences">Physical Sciences</option>
            <option value="Social Sciences">Social Sciences</option>
          </select>

          <input
            type="submit"
            value="Submit"
            id="submitQuery"
            data-toggle="modal"
            data-target="#addModal"
          />
        </form>
      </div>
    );
  }
}

export default Filter;
