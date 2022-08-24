import { NextPageAuth } from '../app/shared/types/auth.types'
import Profile from '../app/components/screens/profile/Profile'

const ProfilePage:NextPageAuth = () => {
	return (
		<Profile/>
	)
}

ProfilePage.isOnlyUser = true

export default ProfilePage
