import React, { FC } from 'react'

import { useQuery } from 'react-query'
import { AdminService } from '../../../../../services/admin.service'


import styles from '../Admin.module.scss'
import { MovieService } from '../../../../../services/movie.service'
import { IMovie } from '../../../../../shared/types/movie.types'
import cn from 'classnames'
import SkeletonLoader from '../../../../../ui/SkeletonLoader'
import SubHeading from '../../../../../ui/heading/SubHeading'
import Link from 'next/link'
import { getMovieUrl } from '../../../../../config/url.config'
import Image from 'next/image'



const PopularMovie:FC = () => {
	const {isLoading, data:movie} = useQuery('Most popular movie in admin panel', ()=> MovieService.getMostPopularMovies(), {
		select:(data):IMovie => data[0]
	})

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title='The most popular movie'/>
			{
				isLoading ? <SkeletonLoader className='h-48'/> :  movie &&
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<a>
								<Image src={movie.bigPoster}
									   width={285}
									   height={176}
									   alt={movie.slug}
									   className={styles.image}
									   unoptimized/>
							</a>
						</Link>
					</>
			}
		</div>
	)
}

export default PopularMovie
