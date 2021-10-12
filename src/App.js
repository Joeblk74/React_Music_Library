import React, { Component } from "react";
// import SearchBar from './SearchBar/Searchbar';
// import SongForm from './components/SongForm/SongForm';
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

  async getAllSongs() {
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

  render() {
    return (
      <div>
        <h1>Music Library</h1>
        <hr />
        <h1>Search Music Library</h1>
        <SongTable songs={this.state.songs} />
        <hr />
        {/* <SearchBar /> */}
      </div>
    );
  }
}

export default App;
