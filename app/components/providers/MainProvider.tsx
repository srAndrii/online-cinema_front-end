import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import ReduxToast from './ReduxToast'
import HeadProvider from './HeadProvider/HeadProvider'

interface Props {
	children?: React.ReactNode;
}

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus:false
		}
	}
})


const MainProvider:FC<Props> = ({children}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast/>
					<Layout>
						{children}
					</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>


	)
}

export default MainProvider
