import React from 'react';

function AvengerMovies(props) {
    return (
        <div>
            {props.movies.map(movie => <div key={movie}>{movie}</div>)}
        </div>
    );
}

export default AvengerMovies;