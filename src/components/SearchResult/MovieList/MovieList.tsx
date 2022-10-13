import React from 'react';

import './MovieList.scss';
import MovieItem from './MovieItem/MovieItem';
import { Movie, MovieListProps } from 'model';

const MovieList: React.FC<MovieListProps> = ({ movies, selectedEpisodeId, onSelect }) => {

    return (
        <ul>
            {
                movies.map((movie: Movie) => {
                    return <MovieItem key={movie.episode_id} onSelect={onSelect} selectedEpisodeId={selectedEpisodeId} movie={movie} />
                })
            }
        </ul>
    );
}

export default MovieList;