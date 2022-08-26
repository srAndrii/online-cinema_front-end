import { FC, useEffect, useState } from 'react'
import { UserService } from '../../../../services/user.service'
import { useMutation } from 'react-query'
import { useFavorites } from '../../favorites/useFavorites'
import { toastError } from '../../../../utils/toast-error'
import cn from 'classnames'
import HeartImage from './heart-animation.png'
import styles from './FavoriteButton.module.scss'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoritesMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoritesMovies) return

		const isHasMovie = favoritesMovies.some((f) => f._id === movieId)

		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)

	}, [favoritesMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton