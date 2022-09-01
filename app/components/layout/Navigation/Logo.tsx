import React, { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import logoImage from '../../../assets/images/logo.png'

import styles from './Navigation.module.scss'

const Logo:FC = () => {
	return (
		<Link href='/'>
			<a className={styles.logo} >
				<Image src={logoImage} width={247} height={38} alt='Movie Night' draggable={false} />
			</a>

		</Link>
	)
}

export default Logo
