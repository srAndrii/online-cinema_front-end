import React, { FC } from 'react'
import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../../ui/heading/Heading'
import AdminHeader from '../../../../ui/admin-table/AdminHeader/AdminHeader'
import { useGenres } from './useGenres'
import AdminTable from '../../../../ui/admin-table/AdminTable/AdminTable'

const GenreList:FC = () => {
	const {handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync} = useGenres()
	return (
		<>
			<Meta title={'Genres'}/>
			<AdminNavigation/>
			<Heading title={'Genres'}/>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createAsync} />
			<AdminTable isLoading={isLoading} tableItems={data || []} removeHandler={deleteAsync} headerItems={['Name', 'Slug']} />
		</>
	)
}

export default GenreList
