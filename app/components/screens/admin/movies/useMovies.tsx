import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { MovieService } from '../../../../services/movie.service'
import { ITableItem } from '../../../../ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '../../../../config/url.config'
import { toastError } from '../../../../utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { getGenresList } from '../../../../utils/movie/getGenresListEach'
import { GenreService } from '../../../../services/genre.service'
import { useRouter } from 'next/router'

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

	const {push} = useRouter()

	const {mutateAsync:createAsync} = useMutation(['create movie'], ()=> GenreService.create(),
		{
			onError:(error)=>{
				toastError(error, 'Create movie')
			},
			onSuccess:({ data: _id })=>{
				toastr.success('Create movie', 'Create was successful')
				push(getAdminUrl(`genre/edit/${_id}`))
			}
		})

	const {mutateAsync:deleteAsync} = useMutation(['delete movie'], (movieId:string)=> MovieService.delete(movieId),
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
		handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
	}), [queryData, searchTerm, deleteAsync, createAsync]);
}