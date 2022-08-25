import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IGenre, IMovie } from '../../app/shared/types/movie.types'
import Catalog from '../../app/ui/catalog-movie/Catalog'
import { GenreService } from '../../app/services/genre.service'
import { MovieService } from '../../app/services/movie.service'
import Error404 from '../404'

interface IGenrePage {
	movies: IMovie[]
	genre: IGenre | undefined
}


const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {

	return genre ? (
		<Catalog
		movies={movies || []}
		title={genre.name}
		description={genre.description}
	/>) : <Error404/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByGenres([genre._id])

		return {
			props: { movies, genre },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default GenrePage
