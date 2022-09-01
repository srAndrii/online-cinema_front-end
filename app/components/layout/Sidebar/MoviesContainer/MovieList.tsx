import React, { FC } from 'react'
import Link from 'next/link'

import { IMovieList } from './movie-list.interface'

import MovieItem from './MovieItem'

import styles from './MovieList.module.scss'

const MovieList:FC<IMovieList> = ({movies,title,link}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map(movie => <MovieItem key={movie._id} movie={movie}/>)}
			<Link href={link}>
				<a className={styles.button}>
					See more
				</a>
			</Link>
		</div>
	)
}

export default MovieList
