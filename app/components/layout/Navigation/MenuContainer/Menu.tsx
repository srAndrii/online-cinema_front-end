import React, { FC } from 'react'
import { IMenu } from './menu.interface'
import MenuItem from './MenuItem'
import dynamic from 'next/dynamic'

import styles from './Menu.module.scss'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({menu:{items, title}}) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>
				{title}
			</div>

			<ul className={styles.ul}>
				{items.map(item =>(
					<MenuItem item={item} key={item.link}/>
				))}
				{title === 'General' ? <DynamicAuthItems/> : null}
			</ul>
		</div>
	)
}

export default Menu
