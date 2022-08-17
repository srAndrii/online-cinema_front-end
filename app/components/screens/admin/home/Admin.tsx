import  { FC } from 'react'
import Meta from '../../../../utils/meta/Meta'
import Statistics from './Statistics/Statistics'
import Heading from '../../../../ui/heading/Heading'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'

const Admin:FC = () => {
	return (
		<>
			<Meta title='Admin panel'/>
			<AdminNavigation/>
			<Heading title='Some statistics'/>
			<Statistics/>
		</>
	)
}

export default Admin
