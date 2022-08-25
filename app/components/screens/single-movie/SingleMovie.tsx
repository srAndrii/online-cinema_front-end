import React, { FC } from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '../../../utils/meta/Meta'
import Banner from '../../../ui/banner/Banner'
import SubHeading from '../../../ui/heading/SubHeading'
import Gallery from '../../../ui/gallery/Gallery'
import Content from './Content/Content'
import VideoPlayer from '../../../ui/video-player/VideoPlayer'
import dynamic from 'next/dynamic'

const DynamicPlayer = dynamic(() => import('../../../ui/video-player/VideoPlayer'), {
	ssr: false,
})

const SingleMovie:FC<IMoviePage>= ({movie, similarMovies}) => {
	return (
		<>
			<Meta title={movie.title} description={`Watch ${movie?.title}`}/>
			<Banner image={movie.bigPoster}
					Detail={()=> <Content movie={movie}/>}
			/>
			
			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug}/>

			<div className='mt-12'>
				<SubHeading title="Similar"/>
				<Gallery items={similarMovies}/>
			</div>

		</>
	)
}

export default SingleMovie
