import React, { FC, Fragment, useEffect, useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import styles from './Header.module.scss'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../Logo'
import MenuContainer from '../MenuContainer/MenuContainer'
import Menu from '../MenuContainer/Menu'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { firstMenu, userMenu } from '../MenuContainer/menu.data'
import Link from 'next/link'

import { IconContext } from 'react-icons';
import dynamic from 'next/dynamic'
import FavoriteMovies from '../../Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'

const DynamicFavoriteMovies = dynamic(
	() => import('../../Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)




const Header:FC = () => {
	const [toggle, setToggle] = useState(false)


	return (

		<div className={styles.app__navbar}>
			<div>
				<Logo/>
			</div>
			<div className={styles.app__navbar_menu}>
				<HiMenuAlt4 onClick={()=> setToggle(true)}/>

				{toggle && (
					<div>
						<ul>
							<li>
								<HiX onClick={() => setToggle(false)} />
							</li>
							<li onClick={() => setToggle(false)}>
								<Menu menu={firstMenu}/>
							</li>
							<li onClick={() => setToggle(false)}>
								<Menu menu={userMenu}/>
							</li>

							<li onClick={() => setToggle(false)}>
								<DynamicFavoriteMovies/>
							</li>

						</ul>
					</div>

				)}
			</div>
		</div>
	)
}

export default Header