import React, { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'

import Meta from '../../../../utils/meta/Meta'
import Heading from '../../../../ui/heading/Heading'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import Button from '../../../../ui/form-elements/Button'
import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'
import AuthFields from '../../auth/AuthFields'

import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'





const UserEdit:FC = () => {
	const {handleSubmit, register, control, formState, setValue } = useForm<IUserEditInput>({
		mode:'onChange'
	})

	const {isLoading, onSubmit} = useUserEdit(setValue)
	return (
		<>
			<Meta title='Edit user'/>
			<AdminNavigation />
			<Heading title="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<AuthFields
							register={register}
							formState={formState}
							isPasswordRequired={false}
						/>
						<Controller
							name="isAdmin"
							control={control}
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className="text-link block mb-7"
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						/>
					</>
				)}

				<Button>Update</Button>
			</form>

		</>
	)
}

export default UserEdit
