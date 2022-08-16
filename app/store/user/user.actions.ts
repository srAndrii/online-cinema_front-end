/*register*/
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from './user.interfase'
import { AuthService } from '../../services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../utils/toast-error'
import { errorCatch } from '../../api/api.helpers'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register',async ({ email, password }, thunkAPI)=>{
	try {
		const response = await AuthService.register(email, password)
		toastr.success('Registration','Completed successfully')
		return response.data
	}catch (error){
		toastError(error)
		return thunkAPI.rejectWithValue(error)
	}
})
/*login*/
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login',async ({ email, password }, thunkAPI)=>{
	try {
		const response = await AuthService.login(email, password)
		toastr.success('Login','Completed successfully')
		return response.data
	}catch (error){
		toastError(error)
		return thunkAPI.rejectWithValue(error)
	}
})

/*logout*/
export const logout = createAsyncThunk('auth/logout',async (_,thunkAPI)=>{
	await AuthService.logout()
})
/*checkAuth*/

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization is finished, plz sign in again'
				)
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)