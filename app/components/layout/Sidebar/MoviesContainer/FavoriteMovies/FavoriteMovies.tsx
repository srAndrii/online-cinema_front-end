import React, { FC } from 'react'
import { useFavorites } from '../../../../screens/favorites/useFavorites'
import { useAuth } from '../../../../../hooks/useAuth'
import NotAuthFavorites from './NotAuthFavorites'
import SkeletonLoader from '../../../../../ui/SkeletonLoader'
import MovieList from '../MovieList'

const FavoriteMovies:FC = () => {
	const { isLoading, favoritesMovies } = useFavorites()
	const {user} = useAuth()

	if (!user) return <NotAuthFavorites/>

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
				link= '/favorites'
				movies={favoritesMovies?.slice(0, 3) || []}
				title='Favorites'
		/>
	)
}

export default FavoriteMovies
