import React, { FC } from 'react'
import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../../ui/heading/Heading'
import AdminHeader from '../../../../ui/admin-table/AdminHeader/AdminHeader'
import { useUsers } from './useUsers'
import AdminTable from '../../../../ui/admin-table/AdminTable/AdminTable'

const UsersList:FC = () => {
	const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useUsers()
	return (
		<>
			<Meta title={'Users'}/>
			<AdminNavigation/>
			<Heading title={'Users'}/>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch}/>
			<AdminTable isLoading={isLoading} tableItems={data || []} removeHandler={deleteAsync} headerItems={['Email', 'Date register']} />
		</>
	)
}

export default UsersList
