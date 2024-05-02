import { MovieData, MovieSearch, showSearch } from "../../features/movies";

export interface MyCarouselProps {
    data: MovieSearch[] | MovieData[] | showSearch[] | undefined
}