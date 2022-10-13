export interface SortState {
    sortCode: string;
}

export interface SearchState {
    searchVal: string;
}

export interface Movie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    release_date: string;
}

export interface MovieListProps {
    movies: Movie[];
    selectedEpisodeId?: number;
    onSelect: (episodeId: number) => void;
}

export interface MovieProps {
    movie: Movie;
    onSelect: (episodeId: number) => void;
    selectedEpisodeId?: number;
}

export interface LayoutProps {
    children: React.ReactNode;
}