import { NextPageAuth } from '../../app/shared/types/auth.types'
import MovieList from '../../app/components/screens/admin/movies/MovieList'

const MovieListPage:NextPageAuth = () => {
	return <MovieList/>
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
