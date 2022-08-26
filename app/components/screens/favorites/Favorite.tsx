import Meta from '../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import { useFavorites } from './useFavorites'
import { FC } from 'react'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import FavoriteItem from './FavoriteItem'
import styles from './Favorite.module.scss'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading } = useFavorites()

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