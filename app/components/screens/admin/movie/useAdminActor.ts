import { useQuery } from 'react-query'
import { IOption } from '../../../../ui/select/select.interface'
import { toastError } from '../../../../utils/toast-error'
import { ActorsService } from '../../../../services/actor.service'

export const useAdminActor = () => {
	const queryData = useQuery('list of actor', () => ActorsService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError(error) {
			toastError(error, 'actor list')
		},
	})

	return queryData
}