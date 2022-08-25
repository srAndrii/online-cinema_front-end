import React, { FC, Fragment } from 'react'
import Link from 'next/link'

import { IContentList } from '../content.interface'

import styles from './ContentList.module.scss'


const ContentList:FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links.map(({ link, title, _id }, idx) => (
					<Fragment key={_id}>
						<Link href={link}>
							<a>{title}</a>
						</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
