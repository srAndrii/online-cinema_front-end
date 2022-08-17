import axios from '../api/interceptors'
import { IMovie } from '../shared/types/movie.types'
import { getMoviesUrl, getUsersUrl } from '../config/api.config'
import { IUser } from '../shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string ){
		return axios.get<IUser[]>(getUsersUrl(``),{
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async deleteUser(_id:string){
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}