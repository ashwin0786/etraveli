import React from 'react';
import './MovieItem.scss';

interface MovieProps {
    movie: {title: string; episode_id: number; release_date: string};
    onSelect: (episodeId: number) => void;
    selectedEpisodeId?: number;
}

const MovieItem: React.FC<MovieProps> = ({ movie, onSelect, selectedEpisodeId }) => {
    let classes= 'movie-item ';
    const { episode_id: episodeId, title, release_date: releaseDate } = movie;

    if(selectedEpisodeId === episodeId) {
        classes += 'selected';
    }

    return (
        <li className={classes} onClick={() => onSelect(episodeId)}><span>Episode {episodeId}</span><span>{title}</span>{releaseDate}</li>
    );
}

export default MovieItem;