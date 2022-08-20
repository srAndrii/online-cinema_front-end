import React, { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../../ui/heading/Heading'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import Field from '../../../../ui/form-elements/Field'
import SlugField from '../../../../ui/form-elements/SlugField/SlugField'
import generateSlug from '../../../../utils/sting/generateSlug'
import Button from '../../../../ui/form-elements/Button'
import formStyles from '../../../../ui/form-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'

const DynamicTextEditor = dynamic(
	() => import('../../../../ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const GenreEdit:FC = () => {
	const {handleSubmit, register, control, reset, formState:{errors}, setValue, getValues} = useForm<IMovieEditInput>({
		mode:'onChange'
	})

	const {isLoading, onSubmit} = useMovieEdit(setValue)
	return (
		<>
			<Meta title='Edit movie'/>
			<AdminNavigation />
			<Heading title='Edit movie'/>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? <SkeletonLoader count={3}/>
					: <>
						<div className={formStyles.fields}>
							<Field
								{...register('name', { required: 'Name is required!',})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<div style={{ width: '31%' }}>
								<SlugField register={register} error={errors.slug} generate={()=>{
									setValue('slug', generateSlug(getValues('name')))}
								}/>

							</div>
							<Field
								{...register('icon', { required: 'Icon is required!',})}
								placeholder="Icon"
								error={errors.name}
								style={{ width: '31%' }}
							/>
						</div>
						<Controller
							name="description"
							control={control}
							defaultValue=""
							render={({
										 field: { value, onChange },
										 fieldState: { error },
									 }) => (
								<DynamicTextEditor
									placeholder="Description"
									onChange={onChange}
									error={error}
									value={value}
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required!',
								},
							}}
						/>

						<Button>Update</Button>
					</>
				}
			</form>

		</>
	)
}

export default GenreEdit
