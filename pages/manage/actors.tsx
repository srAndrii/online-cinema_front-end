import { NextPageAuth } from '../../app/shared/types/auth.types'
import ActorList from '../../app/components/screens/admin/actors/ActorList'

const ActorListPage:NextPageAuth = () => {
	return <ActorList/>
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
