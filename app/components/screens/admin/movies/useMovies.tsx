import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { MovieService } from '../../../../services/movie.service'
import { ITableItem } from '../../../../ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '../../../../config/url.config'
import { convertMongoDate } from '../../../../utils/date/convertMongoDate'
import { toastError } from '../../../../utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { getGenresList } from '../../../../utils/movie/getGenresListEach'

export const useMovies = () =>{
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(['movies list', debouncedSearch], ()=> MovieService.getAll(debouncedSearch), {
		select: ({data}) =>
			data.map(
				(movie):ITableItem =>({
					_id:movie._id,
					editUrl:getAdminUrl(`movie/edit/${movie._id}`),
					items:[movie.title, getGenresList(movie.genres), String(movie.rating)]
				})
			),
		onError:(error)=>{
			toastError(error, 'Movie title')
		}
	})

	

	const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const {mutateAsync:deleteAsync} = useMutation(['delete movie'], (movieId:string)=> MovieService.deleteMovie(movieId),
		{
			onError:(error)=>{
				toastError(error, 'Delete movie')
			},
			onSuccess:()=>{
				toastr.success('Delete movie', 'Delete was successful')
				queryData.refetch()
			}
		})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync]);
}