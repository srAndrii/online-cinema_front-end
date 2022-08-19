import React, { FC } from 'react'
import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../../ui/heading/Heading'
import AdminHeader from '../../../../ui/admin-table/AdminHeader/AdminHeader'
import { useMovies } from './useMovies'
import AdminTable from '../../../../ui/admin-table/AdminTable/AdminTable'

const MovieList:FC = () => {
	const {handleSearch, isLoading, searchTerm, data, deleteAsync} = useMovies()
	return (
		<>
			<Meta title={'Movies'}/>
			<AdminNavigation/>
			<Heading title={'Movies'}/>
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch}/>
			<AdminTable isLoading={isLoading} tableItems={data || []} removeHandler={deleteAsync} headerItems={['Title', 'Genres', 'Rating']} />
		</>
	)
}

export default MovieList
