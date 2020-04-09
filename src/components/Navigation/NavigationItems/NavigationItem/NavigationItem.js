import React from 'react';

import classes from './NavigationItem.module.scss';

const NavigationItem = (props) => {
	const itemClasses = [classes.MenuItem];
	if (props.isActive) {
		itemClasses.push(classes.IsActive);
	}

	return (
		<div className={itemClasses.join(' ')} onClick={props.clicked}>
			<i className={`material-icons ${classes.MenuIcon}`}>{props.icon}</i>
			<p className={classes.MenuText}>{props.text}</p>
		</div>
	);
};

export default NavigationItem;
