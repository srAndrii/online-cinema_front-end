import React, { FC } from 'react'

import CountUsers from './CountUsers'

import styles from '../Admin.module.scss'
import PopularMovie from './PopularMovie'

const Statistics:FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers/>
			<PopularMovie/>
		</div>
	)
}

export default Statistics
