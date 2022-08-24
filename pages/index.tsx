import type { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'

import { MovieService } from '../app/services/movie.service'

import { IHome } from '../app/components/screens/home/home.interface'
import { ISlide } from '../app/ui/slider/slider.interface'

import { getActorUrl, getMovieUrl } from '../app/config/url.config'
import { getGenresList } from '../app/utils/movie/getGenresListEach'

import { errorCatch } from '../app/api/api.helpers'
import { IGalleryItem } from '../app/ui/gallery/galllery.interface'
import { ActorsService } from '../app/services/actor.service'


const HomePage: NextPage<IHome> = ({slides, trendingMovies, actors}) => {
  return (
    <Home slides={slides} actors={actors} trendingMovies={trendingMovies}/>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll()

    const slides: ISlide[] = movies.slice(0, 4).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }))

    const { data: dataActors } = await ActorsService.getAll()

    const actors:IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
      name:a.name,
      posterPath:a.photo,
      link:getActorUrl(a.slug),
      content:{
        title:a.name,
        subTitle:`+${a.countMovies} movies`
      }

    }))

    const dataTrendingMovies = await MovieService.getMostPopularMovies()

    const trendingMovies:IGalleryItem[] = dataTrendingMovies.slice(0, 7).map((m) => ({
      name:m.title,
      posterPath:m.poster,
      link:getMovieUrl(m.slug)
    }))





    return {
      props: {
        slides,
        actors,
        trendingMovies
      } as IHome,
    }
  } catch (error) {
    console.log(errorCatch(error))

    return {
      props: {
        slides:[],
        actors:[],
        trendingMovies:[],
      } as IHome,
    }
  }
}

export default HomePage
