import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useSearchResults } from 'components/SearchResult/useSearchResults';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import type { RootState } from 'store';
import { sortMovies } from 'lib/api';

import Layout from 'components/Layout';
import SearchResult from 'components/SearchResult';
import SearchDetail from 'components/SearchDetail';
import ErrorBoundary from 'components/ErrorBoundary';

const HomePage: React.FC = () => {
    let updatedData, selectedMovie;
    const [ episodeId, setEpisodeId ] = useState<number>();
    const selectedCode = useSelector((state: RootState) => state.sort.sortCode);
    const searchVal = useSelector((state: RootState) => state.search.searchVal);

    const { data, error, isLoading, isError } = useSearchResults();
    
    if (isLoading) {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (isError && error instanceof Error) {
        return <div>Error: {error?.message}</div>;
    }

    if (data && Array.isArray(data.results) && data.count) {
        updatedData = data.results;
    }

    if(updatedData && selectedCode) {
        updatedData = selectedCode ? sortMovies( selectedCode, updatedData ) : updatedData;
    }

    if(updatedData && searchVal) {
        updatedData = updatedData.filter((movie: any) => movie.title.includes(searchVal));
    }

    if(updatedData && episodeId) {
        selectedMovie = updatedData.find((movie: any) => movie.episode_id === episodeId);
    }

    function setEpisodeHandler(episodeId: number) {
        setEpisodeId(episodeId);
    }

    return (
        <>
            <Layout>
                <ErrorBoundary>
                <SearchResult selectedEpisodeId={episodeId} onSelect={setEpisodeHandler} updatedData={updatedData} />
                </ErrorBoundary>
                <SearchDetail selectedMovie={selectedMovie} />
            </Layout>
        </>
    );
};

export default HomePage;
