import { MovieData, MovieSearch, showSearch } from "../../features/movies";

export interface ListProps {
    title: string;
    data: MovieSearch[] | MovieData[] | showSearch[] | undefined
}