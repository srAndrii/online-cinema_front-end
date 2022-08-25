import { FC } from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import { useRateMovie } from './useRateMovie'

import AuthButton from '../../../../ui/video-player/AuthPlaceholder/AuthButton'
import StarRating from 'react-star-rating-component'

import styles from './RateMovie.module.scss'

interface IRateMovie{
	slug: string
	id: string
}

const RateMovie: FC<IRateMovie> = ({ slug, id }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(id)

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
