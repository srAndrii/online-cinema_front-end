import { ISlide } from '../../../ui/slider/slider.interface'
import { IGalleryItem } from '../../../ui/gallery/galllery.interface'

export interface IHome {
	slides:ISlide[]
	trendingMovies:IGalleryItem[]
	actors:IGalleryItem[]
}