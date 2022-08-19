import { NextPageAuth } from '../../../../app/shared/types/auth.types'
import GenreEdit from '../../../../app/components/screens/admin/genre-editor/GenreEdit'


const GenreEditPage:NextPageAuth = () => {
	return <GenreEdit/>
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
