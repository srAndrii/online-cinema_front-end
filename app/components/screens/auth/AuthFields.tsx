import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '../../../ui/form-elements/Field'
import { validEmail } from '../../../shared/regEx'

interface IAuthFields{
	register:UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?:boolean
}

const AuthFields:FC<IAuthFields> = ({isPasswordRequired=false, formState:{errors},register}) => {

	return (
		<>
			<Field {...register('email',{
				required:'Email is required',
				pattern:{
					value:validEmail,
					message:'Please enter a valid email address'
				}
				// @ts-ignore
			})} placeholder='E-mail' error={errors.email}  />
			<Field {...register('password', isPasswordRequired ?  {
				required:'Password is required',
				minLength:{
					value:6,
					message:'Min length should more 6 symbols'
				}
			} : {})}
				   placeholder='Password'
				   // @ts-ignore
				   error={errors.password}
				   type='password'
			/>

		</>
	)
}

export default AuthFields
