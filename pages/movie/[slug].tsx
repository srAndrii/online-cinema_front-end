import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IMovie } from '../../app/shared/types/movie.types'
import Catalog from '../../app/ui/catalog-movie/Catalog'
import { MovieService } from '../../app/services/movie.service'
import Error404 from '../404'
import { IGalleryItem } from '../../app/ui/gallery/galllery.interface'
import SingleMovie from '../../app/components/screens/single-movie/SingleMovie'
import { getActorUrl, getMovieUrl } from '../../app/config/url.config'

export interface IMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}


const MoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (<SingleMovie movie={movie} similarMovies={similarMovies || []}/>) : <Error404/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((a) => ({
			params: { slug: a.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const { data: dataSimilarMovies } = await MovieService.getByGenres(movie.genres.map((g) => g._id))

		const similarMovies:IGalleryItem[] = dataSimilarMovies.filter(m => m._id !== movie._id).map((m) => ({
			name:m.title,
			posterPath:m.poster,
			link:getMovieUrl(m.slug)
		}))

		return {
			props: { similarMovies, movie },
			revalidate: 60,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default MoviePage
