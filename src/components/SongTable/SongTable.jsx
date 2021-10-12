import React from 'react';

const SongTable = (props) => {
    return ( 
        <div>
            {props.songs.map(function(songs){
                return <h2>{songs}</h2>
        })}
        </div>
     );
}
 
export default SongTable;
