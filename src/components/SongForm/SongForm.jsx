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
                <label>Title</label>
                <input type="text" onChange={this.handleChange} />
                <br />
                <br />
                <label>Artist</label>
                <input type="text" onChange={this.handleChange} />
                <br />
                <br />
                <label>Album</label>
                <input type="text" onChange={this.handleChange} />
                <br />
                <br />
                <label>Genre</label>
                <input type="text" onChange={this.handleChange} />
                <br />
                <br />
                <label>Release Date(if known)</label>
                <input type="text" onChange={this.handleChange} />
                <br />
                <br />
                <button type="submit">Add Song</button>
            </form>
            
          );
    }
}
 
export default SongForm;
