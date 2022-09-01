import React, { FC, useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import logoImage from '../../../assets/images/logo.png'
import smallLogo from '../../../assets/images/SmallLogo.png'

import styles from './Navigation.module.scss'


const Logo: FC = () => {

	function useWindowSize() {
		const [windowSize, setWindowSize] = useState<any>({
			width: undefined,
			height: undefined,
		});

		useEffect(() => {
			if (typeof window !== 'undefined') {
				const handleResize = ()=> {setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});

				}

				window.addEventListener("resize", handleResize);

				handleResize();

				return () => window.removeEventListener("resize", handleResize);
			}
		}, []);
		return windowSize;
	}

	let windowSize = useWindowSize()


	return (
		<Link href='/'>
			<a className={styles.logo} >
				<Image
					src={windowSize.width < 700 ? smallLogo : logoImage}
					width={windowSize.width < 700 ? 101 : 247}
					height={windowSize.width < 700 ? 26 : 38}
					alt='Movie Night' draggable={false} />
			</a>

		</Link>
	)
}

export default Logo
