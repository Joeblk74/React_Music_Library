import React, { Component } from "react";
import SearchBar from "./components/SearchBar/Searchbar";
import SongForm from './components/SongForm/SongForm';
import SongTable from "./components/SongTable/SongTable";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    this.getAllSongs();
  }

   getAllSongs = async () => {
    console.log("Inside Get ALL Songs")
    try {
      let response = await axios.get("http://127.0.0.1:8000/music/");
      console.log("Response Date: ", response.data);
      this.setState({
        songs: response.data,
      });
    } 
    catch (err) {
      console.log("Error in axios get: ", err)
    }
  }

deleteSong = async (songId) => {
  // Make axios DELETE request using song id
  console.log(songId)
}

filterSongs = (searchTerm) => {
  console.log(searchTerm)
  //filter the state "songs" variable by the search term
}

  render() {
    return (
      <div>
        <h1>Music Library</h1>
        <hr />
        <SongTable deleteSongFunction={this.deleteSong} songs={this.state.songs} />
        <hr />
        <h1>Search Music Library</h1>
        <SearchBar filterSongs={this.filterSongs} />
        <hr />
        <h1>Add A New Song</h1>
        <SongForm />
      </div>
    );
  }
}

export default App;
