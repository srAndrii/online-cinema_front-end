import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IActor, IMovie } from '../../app/shared/types/movie.types'
import Catalog from '../../app/ui/catalog-movie/Catalog'
import { MovieService } from '../../app/services/movie.service'
import Error404 from '../404'
import { ActorsService } from '../../app/services/actor.service'
import actors from '../manage/actors'

interface IActorPage {
	actor: IActor | undefined
	movies: IMovie[]
}


const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? (<Catalog
		movies={movies || []}
		title={actor.name}
	/>) : <Error404/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await ActorsService.getAll()
		const paths = genres.map((a) => ({
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
		const { data: actor } = await ActorsService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: { movies, actor },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default ActorPage
