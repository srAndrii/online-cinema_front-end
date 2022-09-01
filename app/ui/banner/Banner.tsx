import React, { FC } from 'react'

import styles from './Banner.module.scss'
import Image from 'next/image'

interface IBanner {
	image:string
	Detail?:FC | null
}

const Banner:FC<IBanner> = ({Detail, image}) => {

	return (
		<div className={styles.banner}>
			<Image
				alt=""
				src={image}
				draggable={false}
				layout="fill"
				className={styles.img}
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
