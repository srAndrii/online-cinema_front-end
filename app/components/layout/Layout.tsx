import React, { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import Header from './Navigation/Header/Header'

interface LayoutProps {
	children?: ReactNode;
}

const Layout:FC<LayoutProps> = ({children}) => {
	return (
		<>
			<Header/>
			<div className={styles.layout} >
				<Navigation/>
				<div className={styles.center}>
					{children}
				</div>
				<Sidebar/>
			</div>
		</>

	)
}

export default Layout
