import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { toastError } from '../../../../utils/toast-error'
import { getKeys } from '../../../../utils/object/getKeys'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '../../../../config/url.config'
import { IMovieEditInput } from './movie-edit.interface'
import { MovieService } from '../../../../services/movie.service'

export const useMovieEdit = (setValue:UseFormSetValue<IMovieEditInput>)=>{
	const {push, query} = useRouter()

	const actorId = String(query.id)

	const {isLoading} = useQuery(['movie', actorId], () => MovieService.getById(actorId), {
		onSuccess: ({data})=>{
			getKeys(data).forEach(key => {
				setValue(key, data[key])
			})
			setValue('name', data.name)
		},
		onError:(error) =>{
			toastError(error, 'Get movie')
		},
		enabled: !!query.id,
	})

	const {mutateAsync} = useMutation('update movie', (data:IMovieEditInput)=> MovieService.update(actorId, data), {
		onError:(error) =>{
			toastError(error, 'Update movie')
		},
		onSuccess() {
			toastr.success('Update movie', 'update was successful')
			push(getAdminUrl('movies'))
		},
	})

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}