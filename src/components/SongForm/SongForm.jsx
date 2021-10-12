// import React, { Component } from 'react';

// class SongForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             songTitle: '',
//             songGenre: '',
//             songReleaseDate: '',
//           }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };
//     handleSubmit =(event) => {
//         event.preventDefault();
//         alert('First Name ${this.state.enterSearch}')
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
 
// export default SongForm;
