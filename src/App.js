import React, { Component } from 'react';
import SearchBar from './SearchBar/Searchbar';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div>
        <h1>Music Library</h1>
        <hr />
        <h1>Search Music Library</h1>
        <hr />
        <SearchBar />
      </div>
     );
  }
}
 
export default App ;