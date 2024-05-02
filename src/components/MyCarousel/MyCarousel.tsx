import { MovieData, MovieSearch, showSearch } from '../../features/movies'
import MovieCard from '../MovieCard/MovieCard'
import { MyCarouselProps } from './MyCarouselProps'
import Carousel from '@itseasy21/react-elastic-carousel'
import './MyCarousel.scss'

export default function MyCarousel({ data }: MyCarouselProps) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <div className="carousel-container">
      <Carousel isRTL={false} breakPoints={breakPoints}>
        {data?.map(
          (item: MovieData | MovieSearch | showSearch, index: number) => (
            <MovieCard key={index} data={item} />
          )
        )}
      </Carousel>
    </div>
  )
}
