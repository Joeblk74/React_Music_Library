import React, { Component } from 'react';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            songTitle: '',
            songGenre: '',
            songReleaseDate: '',
          }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit =(event) => {
        event.preventDefault();
        alert()
    };

    render() { 
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Add New Song</label>
                <input type="text" onChange={this.handleChange} />
                <button type="submit">Add Song</button>
            </form>
          );
    }
}
 
export default SongForm;
