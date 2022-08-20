import { NextPageAuth } from '../../../../app/shared/types/auth.types'
import GenreEdit from '../../../../app/components/screens/admin/genre-editor/GenreEdit'
import MovieEdit from '../../../../app/components/screens/admin/movie/MovieEdit'


const MovieEditPage:NextPageAuth = () => {
	return <MovieEdit/>
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage
