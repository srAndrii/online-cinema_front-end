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
import dynamic from 'next/dynamic'
import { useMovieEdit } from '../movie/useMovieEdit'
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'

const DynamicTextEditor = dynamic(
	() => import('../../../../ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const ActorEdit:FC = () => {
	const {handleSubmit, register, control, reset, formState:{errors}, setValue, getValues} = useForm<IActorEditInput>({
		mode:'onChange'
	})

	const {isLoading, onSubmit} = useActorEdit(setValue)
	return (
		<>
			<Meta title='Edit actor'/>
			<AdminNavigation />
			<Heading title='Edit actor'/>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? <SkeletonLoader count={3}/>
					: <>
						<div className={formStyles.fields}>
							<Field
								{...register('name', { required: 'Name is required!',})}
								placeholder="Name"
								error={errors.name}
							/>
							<div style={{ width: '31%' }}>
								<SlugField register={register} error={errors.slug} generate={()=>{
									setValue('slug', generateSlug(getValues('name')))}
								}/>

							</div>
							{/*<Controller*/}
							{/*	name="photo"*/}
							{/*	control={control}*/}
							{/*	defaultValue=""*/}
							{/*	render={({*/}
							{/*				 field: { value, onChange },*/}
							{/*				 fieldState: { error },*/}
							{/*			 }) => (*/}
							{/*		<h1>photo upload</h1>*/}
							{/*	)}*/}
							{/*	rules={{*/}
							{/*		required: 'Photo is required'*/}
							{/*	}}*/}
							{/*/>*/}
						</div>
						<Button>Update</Button>
					</>
				}
			</form>

		</>
	)
}

export default ActorEdit
