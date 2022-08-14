import React, { FC } from 'react'

import MenuContainer from './MenuContainer/MenuContainer'
import Logo from './Logo'

import styles from './Navigation.module.scss'

const Navigation:FC = () => {
	return (
		<div className={styles.navigation} >
			<Logo/>
			<MenuContainer/>
		</div>
	)
}

export default Navigation
