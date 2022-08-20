import { NextPageAuth } from '../../../../app/shared/types/auth.types'
import ActorEdit from '../../../../app/components/screens/admin/actor/ActorEdit'


const ActorEditPage:NextPageAuth = () => {
	return <ActorEdit/>
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
