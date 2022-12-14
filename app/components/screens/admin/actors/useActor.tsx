import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { ITableItem } from '../../../../ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '../../../../config/url.config'
import { toastError } from '../../../../utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { ActorsService } from '../../../../services/actor.service'
import { useRouter } from 'next/router'

export const useActor = () =>{
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(['actors list', debouncedSearch], ()=> ActorsService.getAll(debouncedSearch), {
		select: ({data}) =>
			data.map(
				(actor):ITableItem =>({
					_id:actor._id,
					editUrl:getAdminUrl(`actor/edit/${actor._id}`),
					items:[actor.name, String(actor.countMovies)]
				})
			),
		onError:(error)=>{
			toastError(error, 'User title')
		}
	})

	

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const {push} = useRouter()

	const {mutateAsync:createAsync} = useMutation(['create actor'], ()=> ActorsService.create(),
		{
			onError:(error)=>{
				toastError(error, 'Create actor')
			},
			onSuccess:({ data: _id })=>{
				toastr.success('Create actor', 'Create was successful')
				push(getAdminUrl(`actor/edit/${_id}`))
			}
		})

	const {mutateAsync:deleteAsync} = useMutation(['delete actor'], (actorId:string)=> ActorsService.delete(actorId),
		{
			onError:(error)=>{
				toastError(error, 'Delete actor')
			},
			onSuccess:()=>{
				toastr.success('Delete actor', 'Delete was successful')
				queryData.refetch()
			}
		})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
	}), [queryData, searchTerm, deleteAsync, createAsync]);
}