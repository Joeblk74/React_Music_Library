import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterSearch: ""
          }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterSongs(this.state.enterSearch)
    };

    render() { 
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Song Search</label>
                <input name="enterSearch" type="text" onChange={this.handleChange} value={this.state.enterSearch} />
                <button type="submit">Search</button>
            </form>
          );
    }
}
 
export default SearchBar;