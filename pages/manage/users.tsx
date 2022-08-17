import { NextPageAuth } from '../../app/shared/types/auth.types'
import UsersList from '../../app/components/screens/admin/users/UsersList'

const UserListPage:NextPageAuth = () => {
	return <UsersList/>
}

UserListPage.isOnlyAdmin = true

export default UserListPage
