import axios, { axiosClassic } from '../api/interceptors'
import { IActor } from '../shared/types/movie.types'
import { getActorsUrl, getMoviesUrl, getUsersUrl } from '../config/api.config'

export const ActorsService = {
	async getAll(searchTerm?: string ){
		return axiosClassic.get<IActor[]>(getActorsUrl(``),{
			params: searchTerm ? { searchTerm } : {}
		})
	},


	async deleteActor(_id:string){
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}