import React from 'react';

import './MovieList.scss';
import MovieItem from './MovieItem';

interface MovieListProps {
    movies: {title: string; episode_id: number; release_date: string}[];
    selectedEpisodeId?: number;
    onSelect: (episodeId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, selectedEpisodeId, onSelect }) => {

    return (
        <ul>
            {
                movies.map((movie: any) => {
                    return <MovieItem key={movie.episodeId} onSelect={onSelect} selectedEpisodeId={selectedEpisodeId} movie={movie} />
                })
            }
        </ul>
    );
}

export default MovieList;