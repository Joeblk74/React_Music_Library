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
       // Axios Post Request to reate a new song here
    };

    render() { 
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Title</label>
                <input name="songTitle" type="text" onChange={this.handleChange} value={this.state.songTitle} />
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
                <input name="songGenre" type="text" onChange={this.handleChange} value={this.state.songGenre} />
                <br />
                <br />
                <label>Release Date(if known)</label>
                <input name="songReleaseDate" type="text" onChange={this.handleChange} value={this.state.songReleaseDate} />
                <br />
                <br />
                <button type="submit">Add Song</button>
            </form>
            
          );
    }
}
 
export default SongForm;
