import axios, { axiosClassic } from '../api/interceptors'
import { IMovie } from '../shared/types/movie.types'
import { getMoviesUrl } from '../config/api.config'
import { IMovieEditInput } from '../components/screens/admin/movie/movie-edit.interface'

export const MovieService = {
	async getAll(searchTerm?: string ){
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``),{
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getBySlug(slug:string){
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getByActor(actorId:string){
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.put(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},

	async getByGenres(genreIds:string[]){
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {genreIds})
	},

	async getById(_id:string ){
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async getMostPopularMovies(){
		const {data:movies} = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
		return movies
	},

	async create(){
		return axios.post<string>(getMoviesUrl(`/`))
	},

	async update(_id:string, data:IMovieEditInput){
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id:string){
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}