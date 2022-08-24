import { GetStaticProps, NextPage } from 'next'
import { IMovie } from '../app/shared/types/movie.types'
import Catalog from '../app/ui/catalog-movie/Catalog'
import { MovieService } from '../app/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: { movies },
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
