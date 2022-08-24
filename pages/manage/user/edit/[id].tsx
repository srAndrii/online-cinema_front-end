import { NextPageAuth } from '../../../../app/shared/types/auth.types'
import UserEdit from '../../../../app/components/screens/admin/user/UserEdit'


const UserEditPage:NextPageAuth = () => {
	return <UserEdit/>
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
