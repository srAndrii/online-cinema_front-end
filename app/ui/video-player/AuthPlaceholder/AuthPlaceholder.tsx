import React, { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder:FC<{ slug: string }> = ({ slug }) => {

	return (
		<div className={styles.placeholder}>
			<div>You must be logged in to start watching</div>
			<AuthButton slug={slug}/>
		</div>
	)
}

export default AuthPlaceholder
