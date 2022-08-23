import type { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'

import { MovieService } from '../app/services/movie.service'

import { IHome } from '../app/components/screens/home/home.interface'
import { ISlide } from '../app/ui/slider/slider.interface'

import { getMovieUrl } from '../app/config/url.config'
import { getGenresList } from '../app/utils/movie/getGenresListEach'

import { errorCatch } from '../app/api/api.helpers'


const HomePage: NextPage<IHome> = ({slides}) => {
  return (
    <Home slides={slides}/>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll()

    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }))





    return {
      props: {
        slides,
      } as IHome,
    }
  } catch (error) {
    console.log(errorCatch(error))

    return {
      props: {
        slides: [],
      } as IHome,
    }
  }
}

export default HomePage
