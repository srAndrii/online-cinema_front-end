import React, { FC } from 'react'

import { IHome } from './home.interface'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import Slider from '../../../ui/slider/Slider'
import SubHeading from '../../../ui/heading/SubHeading'
import Gallery from '../../../ui/gallery/Gallery'
import styles from "../../layout/Layout.module.scss";
import Search from "../../layout/Sidebar/Search/Search";

const Home:FC<IHome> = ({slides, trendingMovies, actors}) => {

	return (
		<>
			<Meta title='Watch movie online'
				  description='Watch movies and TV shows online or stream right to your browser.'
			>

			</Meta>
			<div className={styles.search}>
				<Search/>
			</div>
			<Heading title='Watch movies online' className='text-gray-500 mb-8 text-xl sm:text-3xl'/>
			{slides.length && <Slider slides={slides}/>}
			<div className='my-10'>
				<SubHeading title='Trending Now'/>
				{trendingMovies.length && <Gallery items={trendingMovies}/>}
			</div>
			<div>
				<SubHeading title='Best Actors'/>
				{actors.length && <Gallery items={actors}/>}
			</div>
		</>

	)
}

export default Home

