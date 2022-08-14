import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
	children: React.ReactNode;
}

const quryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus:false
		}
	}
})


const MainProvider:FC<Props> = ({children}) => {
	return (
		<QueryClientProvider client={quryClient}>
			{children}
		</QueryClientProvider>
	)
}

export default MainProvider
