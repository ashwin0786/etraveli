import axios from 'axios';
import { BASE_URL } from 'config/index';

export const fetchMovies = async () => {
    const { data } = await axios.get(
        encodeURI(
            `${BASE_URL}`,
        ),
    );

    return data;
};

export const sortMovies = (sortCode: string, movies: []) => {
    const sortKey = sortCode === 'episode' ? 'episode_id' : 'release_date';
    return movies.sort((a,b) => (a[sortKey] > b[sortKey]) ? 1 : ((b[sortKey] > a[sortKey]) ? -1 : 0));
}