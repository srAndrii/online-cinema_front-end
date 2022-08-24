import React, { FC } from 'react'

import styles from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import { useForm } from 'react-hook-form'
import { useProfile } from './useProfile'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../../ui/heading/Heading'
import AuthFields from '../auth/AuthFields'
import Button from '../../../ui/form-elements/Button'
import SkeletonLoader from '../../../ui/SkeletonLoader'

const Profile:FC = () => {
	const {handleSubmit, register, formState, setValue} = useForm<IProfileInput>({
		mode:'onChange'
	})
	const {isLoading, onSubmit} = useProfile(setValue)
	return (
		<>
			<Meta title='Profile'/>
			<Heading title='Profile' className={styles.form}/>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isLoading ? <SkeletonLoader count={2}/> : <AuthFields register={register} formState={formState} />}

					<Button>
						Update
					</Button>
				</form>
		</>
	)
}

export default Profile
