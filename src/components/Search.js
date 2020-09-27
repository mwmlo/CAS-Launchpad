import React, { Component } from 'react'
import Filter from './Filter'

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: this.props.query
        }
    }

    render() {

        console.log("this.props.query = ", this.state.query)

        return (
            <React.Fragment>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">
                    Search for an opportunity!
                </button>

                <div class="modal fade" id="addModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="addModal">Add an opportunity</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Filter updateQuery={this.props.updateQuery}/>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Search;
