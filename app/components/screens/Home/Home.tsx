import React, { FC } from 'react'
import { IHome } from './home.interface'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

const Home:FC<IHome> = () => {
	return (
		<>
			<Meta title='Watch movie online'
				  description='Watch movies and TV shows online or stream right to your browser.'
			>

			</Meta>
			<Heading title='Watch movies online' className='text-gray-500 mb-8 text-xl'/>
			<button onClick={() => toastr.success('Auth', 'Hi, good day')}>
				Show
			</button>
		</>

	)
}

export default Home

