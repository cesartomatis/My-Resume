import React from 'react';

import classes from './MenuToggle.module.scss';

const MenuToggle = (props) => {
	const burgerClasses = [classes.hamburger, classes['hamburger--elastic']];
	if (props.open) {
		burgerClasses.push(classes['is-active']);
	}
	return (
		<button
			className={burgerClasses.join(' ')}
			type="button"
			onClick={props.burgerClicked}>
			<span className={classes['hamburger-box']}>
				<span className={classes['hamburger-inner']}></span>
			</span>
		</button>
	);
};

export default MenuToggle;
