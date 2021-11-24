import React, { Fragment } from "react";

const SongTable = (props) => {
  return (
    <Fragment>
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
          {console.log("Props: ", props.songs)}
          {props.songs.map(function (song) {
            return (
              <tr key={song.id}>
                <td>{song.title}</td>
                
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                <br />
                <br />
                <button type="submit" onClick={() => props.deleteSongfunction(song.id)}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default SongTable;
