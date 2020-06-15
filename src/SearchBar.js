import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = {
        term: ""
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="search">Image Search </label>
                        <input type="text" name="search" id="search" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar
