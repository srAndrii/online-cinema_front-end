import { NextPageAuth } from '../../app/shared/types/auth.types'
import GenreList from '../../app/components/screens/admin/genres/GenreList'

const GenreListPage:NextPageAuth = () => {
	return <GenreList/>
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage
