import React from 'react';

import './SearchDetail.scss';
import { Movie } from 'model';

const SearchDetail: React.FC<{ selectedMovie: Movie }> = ({ selectedMovie}) => {

    return (
        <div className="search-detail">
          {!selectedMovie && <div className="centered">No movie selected</div>}
          {selectedMovie && <h3>{selectedMovie.title}</h3>}
          {selectedMovie && <p>{selectedMovie.opening_crawl}</p>}
          {selectedMovie && <p> { 'Direct by: ' }  {selectedMovie.director}</p>}
        </div>
    );
};

export default SearchDetail;
