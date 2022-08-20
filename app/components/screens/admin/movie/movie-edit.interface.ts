import { IGenre } from '../../../../shared/types/movie.types'

export interface  IMovieEditInput extends Omit<IGenre, '_id'>{

}