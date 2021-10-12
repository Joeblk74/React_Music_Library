// import React, { Component } from 'react';

// class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             enterSearch: ""
//           }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.search]: event.target.value
//         })
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         alert('Search: {this.state.search}')
//     };

//     render() { 
//         return (
//             <form onSubmit={(event) => this.handleSubmit(event)}>
//                 <label>Song Search</label>
//                 <input type="text" onChange={this.handleChange} />
//                 <button type="submit">Search</button>
//             </form>
//           );
//     }
// }
 
// export default SearchBar;