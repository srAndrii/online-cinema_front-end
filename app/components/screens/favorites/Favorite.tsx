import { FC } from 'react'

import { useFavorites } from './useFavorites'
import { useAuth } from '../../../hooks/useAuth'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'

import SkeletonLoader from '../../../ui/SkeletonLoader'
import FavoriteItem from './FavoriteItem'

import styles from './Favorite.module.scss'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading } = useFavorites()

	const {user} = useAuth()

	if(!user) return null

	return (
		<>
			<Meta title="Favorites"/>
			<Heading title='Favorites' />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoritesMovies?.map((movie) => (
						<FavoriteItem
							key={movie._id}
							movie={movie}
						/>
					))
				)}
			</section>
		</>

	)
}

export default Favorites