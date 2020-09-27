import React, { Component } from 'react'
import db from "../firebase"

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: [],
            subject: ""
        };

        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubjectChange(event) {
        const subject = event.target.value;
        this.setState({ subject: subject})
    }

    handleCheckboxChange = (event) => {
        const filters = this.state.filters
        const target = event.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const nam = target.name;

        if (!filters.includes(nam) && val) {
            filters.push(nam)
        }
        if (filters.includes(nam) && !val) {
            filters.pop(nam)
        }
    }

    handleSubmit(event) {

        event.preventDefault();

        const filters = this.state.filters
        filters.push(this.state.subject)

        this.props.updateQuery(filters)

    }

    render() {
        return (
            <div className="filter">
                <form onSubmit={this.handleSubmit}>
                    <div class="category">
                        <p>What CAS category does this experience count as?</p>
                        <label>
                            Creativity
                    <input type="checkbox" id="creativity" name="creativity"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.creativity}
                            />
                        </label>
                        <label>
                            Activity
                    <input type="checkbox" id="activity" name="activity"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.activity}
                            />
                        </label>
                        <label>
                            Service
                    <input type="checkbox" id="service" name="service"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.service}
                            />
                        </label>
                    </div>

                    <div class="outcomes">
                        <p>CAS Learning Outcomes</p>
                        <label>
                            Strength & Growth
                    <input type="checkbox" id="strength" name="strength"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.strength}
                            />
                        </label>
                        <label>
                            Challenge & Skills
                    <input type="checkbox" id="challenge" name="challenge"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.challenge}
                            />
                        </label>
                        <label>
                            Initiative & Planning
                    <input type="checkbox" id="plan" name="plan"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.plan}
                            />
                        </label>
                        <label>
                            Commitment & Perserverance
                    <input type="checkbox" id="commit" name="commit"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.commit}
                            />
                        </label>
                        <label>
                            Collaboration
                    <input type="checkbox" id="collab" name="collab"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.collab}
                            />
                        </label>
                        <label>
                            Global Engagement
                    <input type="checkbox" id="global" name="global"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.global}
                            />
                        </label>
                        <label>
                            Ethics of Choices & Actions
                    <input type="checkbox" id="ethics" name="ethics"
                                onChange={this.handleCheckboxChange}
                                checked={this.state.ethics}
                            />
                        </label>
                    </div>

                    <p>Revelant university subjects</p>
                    <select id="subjects" name="subjects" onChange={this.handleSubjectChange} value={this.state.subjects}>
                        <option value="socsci">N/A</option>
                        <option value="Arts & Humanities">Arts & Humanities</option>
                        <option value="Business, Law & Management">Business, Law & Management</option>
                        <option value="Engineering & Technology">Engineering & Technology</option>
                        <option value="Life Sciences & Medicine">Life Sciences & Medicine</option>
                        <option value="Physical Sciences">Physical Sciences</option>
                        <option value="Social Sciences">Social Sciences</option>
                    </select>

                    <input type="submit" value="Submit" id="submitQuery" />
                </form>
            </div>
        )
    }
}

export default Filter;
