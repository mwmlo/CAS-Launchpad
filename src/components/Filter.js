import React, { Component } from 'react'

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            creativity: false,
            activity: false,
            service: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleCheckboxChange = (event) => {
        const target = event.target;
        const val = target.type === 'checkbox' ? target.checked : target.value;
        const nam = target.name;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {

        event.preventDefault();

       // Search using filters

        alert('You have submitted: ' + this.state.name);
    }

    render() {
        return (
            <div className="filter">
                <form onSubmit={this.handleSubmit}>
                <label>
                    Search: 
                    <input type='text' name='search' required onChange={this.handleChange} />
                </label>
                <label>
                <p>Category:</p>
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
                    
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default Filter;
