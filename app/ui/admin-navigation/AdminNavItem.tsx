import React, { FC } from 'react'
import { INavItem } from './admin-navigation.interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

import styles from './AdminNavigation.module.scss'

const AdminNavItem:FC<{ item: INavItem }> = ({item:{title, link}}) => {
	const {asPath} = useRouter()
	return (
		<li>
			<Link href={link}>
				<a className={cn({[styles.active]: asPath === link})}>
					{title}
				</a>
			</Link>
		</li>
	)
}

export default AdminNavItem
