import React, { Component } from 'react';
// import SearchBar from './SearchBar/Searchbar';
// import SongForm from './components/SongForm/SongForm';
import SongTable from './components/SongTable/SongTable';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      songs: []
    }
  }

componentDidMount(){
  this.getAllSongs();
}

async getAllSongs() {
  let response = await axios.get('http://127.0.0.1:8000/music');
  this.setState({
songs: response.data
  })
}
  render() { 
    console.log(this.state.songs)
    return (
      <div>
        <h1>Music Library</h1>
        <hr />
        <SongTable songs={this.state.songs} />
        <table>
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>

          </tbody>

        </table>
        <h1>Search Music Library</h1>
        <hr />
        {/* <SearchBar /> */}
      </div>
     );
  }
}
 
export default App ;