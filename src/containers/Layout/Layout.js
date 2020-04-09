import React, { useState } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Home from '../Home/Home';

const Layout = (props) => {
	const [showSideMenu, setShowSideMenu] = useState(false);
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [scrollTo, setScrollTo] = useState('aboutme');
	const [activeItem, setActiveItem] = useState('aboutme');

	const sideMenuClosedHandler = () => {
		setShowSideMenu(false);
		setBurgerOpen(false);
	};

	const sideMenuToggleHandler = () => {
		setShowSideMenu(!showSideMenu);
		setBurgerOpen(!burgerOpen);
	};

	const navItemClickedHandler = (item) => {
		setScrollTo(item);
	};

	const activatedItemHandler = (item) => {
		if (item !== activeItem) {
			setActiveItem(item);
		}
	};

	return (
		<div className={classes.Container}>
			<Toolbar clicked={sideMenuToggleHandler} menuOpen={burgerOpen} />
			<SideMenu
				open={showSideMenu}
				closed={sideMenuClosedHandler}
				navItemClicked={navItemClickedHandler}
				activatedItem={activeItem}
			/>
			<main className={classes.Content}>
				<Home scrollTo={scrollTo} activatedItem={activatedItemHandler} />
			</main>
		</div>
	);
};

export default Layout;
