import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../../ui/heading/Heading'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import Field from '../../../../ui/form-elements/Field'

const GenreEdit:FC = () => {
	const {handleSubmit, register, reset, formState:{errors}, setValue, getValues} = useForm<IGenreEditInput>({
		mode:'onChange'
	})

	const {isLoading, onSubmit} = useGenreEdit(setValue)
	return (
		<>
			<Meta title='Edit genre'/>
			<Heading title='Edit genre'/>
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? <SkeletonLoader count={3}/>
					: <>
						<div>
							<Field
								{...register('name', { required: 'Name is required!',})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}/>
							<div style={{ width: '31%' }}>

							</div>
							<Field
								{...register('icon', { required: 'Icon is required!',})}
								placeholder="Icon"
								error={errors.name}
								style={{ width: '31%' }}/>
						</div>
					</>
				}
			</form>

		</>
	)
}

export default GenreEdit
