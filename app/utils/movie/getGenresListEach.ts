import { array } from 'prop-types'

export const getGenresListEach = (index:number, length:number, name:string) => (index + 1 === length ? name :name + ', ')

interface IArrayItem{
	name:string
}
export const getGenresList = (array:IArrayItem[]) => array.map( i => i.name).join(', ')