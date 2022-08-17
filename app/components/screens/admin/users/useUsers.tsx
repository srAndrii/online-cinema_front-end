import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { UserService } from '../../../../services/user.service'
import { ITableItem } from '../../../../ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '../../../../config/url.config'
import { convertMongoDate } from '../../../../utils/date/convertMongoDate'
import { toastError } from '../../../../utils/toast-error'
import { toastr } from 'react-redux-toastr'

export const useUsers = () =>{
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(['users list', debouncedSearch], ()=> UserService.getAll(debouncedSearch), {
		select: ({data}) =>
			data.map(
				(user):ITableItem =>({
					_id:user._id,
					editUrl:getAdminUrl(`user/edit/${user._id}`),
					items:[user.email, convertMongoDate(user.createdAt)]
				})
			),
		onError:(error)=>{
			toastError(error, 'User title')
		}
	})

	

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const {mutateAsync:deleteAsync} = useMutation(['delete user'], (userId:string)=> UserService.deleteUser(userId),
		{
			onError:(error)=>{
				toastError(error, 'Delete user')
			},
			onSuccess:()=>{
				toastr.success('Delete user', 'Delete was successful')
				queryData.refetch()
			}
		})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync]);
}