import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'

import Logo from '../Logo'
import Menu from '../MenuContainer/Menu'

import { firstMenu, userMenu } from '../MenuContainer/menu.data'

import { HiMenuAlt4, HiX } from 'react-icons/hi'

import { motion } from 'framer-motion'

import styles from './MobileNavbar.module.scss'

const DynamicFavoriteMovies = dynamic(
	() => import('../../Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '100%' }
}


const MobileNavbar:FC = () => {
	const [show, setShow] = useState(false)


	return (

		<>
			<div className={styles.header}>
				<div>
					<Logo/>
				</div>

			</div>
			<motion.nav animate={show ? 'open' : 'closed'}
						variants={variants}
						initial='closed'
						transition={{ duration: 0.5 }}
						className={styles.mobile_navbar}
			>
				<motion.div className={styles.inner_nav}>
					<div onClick={() => setShow(show => !show)}>
						<Menu menu={firstMenu} />
					</div>
					<div onClick={() => setShow(show => !show)}>
						<Menu menu={userMenu} />
					</div>
					<div onClick={() => setShow(show => !show)}>
						<DynamicFavoriteMovies/>
					</div>
				</motion.div>

			</motion.nav>
			<motion.button
				className={styles.toggle}
				onClick={() => setShow(show => !show)}
				whileHover={{ scale: 1.1 }}
				whileTap={{scale:0.9}}
			>
				{show ? <HiX/> : <HiMenuAlt4/>}

			</motion.button>
		</>


	)
}

export default MobileNavbar