import React, { FC } from 'react'

import { navItems } from './admin-navigation.data'
import AdminNavItem from './AdminNavItem'

import styles from './AdminNavigation.module.scss'

const AdminNavigation:FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => <AdminNavItem item={item} key={item.link}/>)}
			</ul>
		</nav>
	)
}

export default AdminNavigation
