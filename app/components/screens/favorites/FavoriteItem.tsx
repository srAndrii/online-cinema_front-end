import { FC } from 'react'
import { IMovie } from '../../../shared/types/movie.types'
import Image from 'next/image'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'
import Link from 'next/link'
import { getMovieUrl } from '../../../config/url.config'
import styles from './Favorite.module.scss'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						layout="fill"
						draggable={false}
						priority
					/>

					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem