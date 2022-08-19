import React, { FC } from 'react'
import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../../ui/heading/Heading'
import AdminHeader from '../../../../ui/admin-table/AdminHeader/AdminHeader'
import { useActor } from './useActor'
import AdminTable from '../../../../ui/admin-table/AdminTable/AdminTable'

const ActorList:FC = () => {
	const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useActor()
	return (
		<>
			<Meta title={'Actors'}/>
			<AdminNavigation/>
			<Heading title={'Actors'}/>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch}/>
			<AdminTable isLoading={isLoading} tableItems={data || []} removeHandler={deleteAsync} headerItems={['Name', 'Count movies']} />
		</>
	)
}

export default ActorList
