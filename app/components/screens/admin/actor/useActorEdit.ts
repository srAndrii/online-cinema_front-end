import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { GenreService } from '../../../../services/genre.service'
import { toastError } from '../../../../utils/toast-error'
import { getKeys } from '../../../../utils/object/getKeys'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '../../../../config/url.config'
import { IActorEditInput } from './actor-edit.interface'
import { ActorsService } from '../../../../services/actor.service'

export const useActorEdit = (setValue:UseFormSetValue<IActorEditInput>)=>{
	const {push, query} = useRouter()

	const actorId = String(query.id)

	const {isLoading} = useQuery(['actor', actorId], () => ActorsService.getById(actorId), {
		onSuccess: ({data})=>{
			getKeys(data).forEach(key => {
				setValue(key, data[key])
			})
			setValue('name', data.name)
		},
		onError:(error) =>{
			toastError(error, 'Get actor')
		},
		enabled: !!query.id,
	})

	const {mutateAsync} = useMutation('update actor', (data:IActorEditInput)=> ActorsService.update(actorId, data), {
		onError:(error) =>{
			toastError(error, 'Update actor')
		},
		onSuccess() {
			toastr.success('Update actor', 'update was successful')
			push(getAdminUrl('actors'))
		},
	})

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}