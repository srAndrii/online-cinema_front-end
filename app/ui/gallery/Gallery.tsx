import React, { FC } from 'react'

import { IGalleryItem } from './galllery.interface'

import GalleryItem from './GalleryItem'

import styles from'./Gallery.module.scss'

const Gallery:FC<{ items: IGalleryItem[] }> = ({items}) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => <GalleryItem key={item.link} item={item} variant='vertical'/>)}
		</div>
	)
}

export default Gallery
