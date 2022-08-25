import { useMutation } from 'react-query'
import { MovieService } from '../../../services/movie.service'
import { useEffect } from 'react'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update count opened', () =>
		MovieService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()

	}, [])
}
