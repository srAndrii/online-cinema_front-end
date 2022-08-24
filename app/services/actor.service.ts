import axios, { axiosClassic } from '../api/interceptors'
import { IActor } from '../shared/types/movie.types'
import { getActorsUrl, getGenresUrl, getMoviesUrl, getUsersUrl } from '../config/api.config'
import { IMovieEditInput } from '../components/screens/admin/movie/movie-edit.interface'
import { IActorEditInput } from '../components/screens/admin/actor/actor-edit.interface'

export const ActorsService = {
	async getAll(searchTerm?: string ){
		return axiosClassic.get<IActor[]>(getActorsUrl(``),{
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getBySlug(slug:string ){
	return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async getById(_id:string ){
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async create(){
		return axios.post<string>(getActorsUrl(`/`))
	},

	async update(_id:string, data:IActorEditInput){
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},


	async delete(_id:string){
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
}