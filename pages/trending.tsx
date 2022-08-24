import { GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { MovieService } from '../app/services/movie.service'
import Catalog from '../app/ui/catalog-movie/Catalog'

const TrendingPage: NextPage = () => {
	const { data: popularMovies } = useQuery('Popular movies', () =>
		MovieService.getMostPopularMovies()
	)

	return (
		<Catalog
			movies={popularMovies || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const movies = await MovieService.getMostPopularMovies()


	return {
		props: {
			movies
		},
	}
}

export default TrendingPage
