import React from 'react'
import db from "../firebase"

class AddExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            desc: "",
            link: "",
            creativity: false,
            activity: false,
            service: false,
            strength: false,
            challenge: false,
            plan: false,
            commit: false,
            collab: false,
            global: false,
            ethics: false,
            subjects: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        console.log("Changed ", nam, "to ", val)
        this.setState({ [nam]: val });
    }

    handleCheckboxChange = (event) => {
        const target = event.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const nam = target.name;
        this.setState({ [nam]: val });
    }

    handleSubmit(event) {

        event.preventDefault();

        let properties = [];

        if (this.state.creativity) {
            properties.push("Creativity")
        }
        if (this.state.activity) {
            properties.push("Activity")
        }
        if (this.state.service) {
            properties.push("Service")
        }
        if (this.state.strength) {
            properties.push("Strength & Growth")
        }
        if (this.state.challenge) {
            properties.push("Challenge & Skills")
        }
        if (this.state.plan) {
            properties.push("Initiative & Planning")
        }
        if (this.state.collab) {
            properties.push("Collaboration")
        }
        if (this.state.ethics) {
            properties.push("Ethics")
        }
        if (this.state.global) {
            properties.push("Global Engagement")
        }
        if (this.state.commit) {
            properties.push("Commitment & Perserverance")
        }

        console.log("Adding experiences: ", this.state.subjects)
        db.collection("experiences").add({
            name: this.state.name,
            desc: this.state.desc,
            link: this.state.link,
            tags: properties,
            subjects: this.state.subjects
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

        alert('You have submitted: ' + this.state.name);
    }

    render() {
        return (
            <form class="addExperienceForm" onSubmit={this.handleSubmit}>
                <h1>Add an experience!</h1>
                <label>
                    Name:
                    <input type='text' name='name' required onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type='text' name='desc' required onChange={this.handleChange} />
                </label>
                <label>
                    Link to more information:
                    <input type='url' name='link' pattern="https?://.+" onChange={this.handleChange} />
                </label>

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
                <select id="subjects" name="subjects" onChange={this.handleChange} value={this.state.subjects}>
                    <option value="socsci">N/A</option>
                    <option value="Arts & Humanities">Arts & Humanities</option>
                    <option value="Business, Law & Management">Business, Law & Management</option>
                    <option value="Engineering & Technology">Engineering & Technology</option>
                    <option value="Life Sciences & Medicine">Life Sciences & Medicine</option>
                    <option value="Physical Sciences">Physical Sciences</option>
                    <option value="Social Sciences">Social Sciences</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddExperience;
