import React from 'react';

import './SearchResult.scss';
import MovieList from './MovieList/MovieList';

const SearchResult: React.FC<{ updatedData: [] , onSelect: (episodeId: number) => void, selectedEpisodeId: number | undefined }> = ({ updatedData, onSelect, selectedEpisodeId }) => {
    
    return (
        <>
            <div className="search-result">
                {updatedData.length === 0 && <div className="centered">No movies found.</div>}
                { updatedData.length !== 0 && <MovieList movies={updatedData} selectedEpisodeId={selectedEpisodeId} onSelect={onSelect} />}
            </div>
        </>
    );
};

export default SearchResult;
