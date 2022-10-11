import { useQuery } from 'react-query';
import { fetchMovies } from 'lib/api';

export const useSearchResults = () => {
    const { data, error, isError, isLoading } = useQuery(
        ['movies'],
        () => fetchMovies(),
        { useErrorBoundary: true },
    );
    
    return { data, error, isLoading, isError };
};
