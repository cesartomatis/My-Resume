import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = (props) => {
	const backdropClasses = [classes.Backdrop];
	if (props.transparent) {
		backdropClasses.push(classes.Transparent);
	}
	return props.show ? (
		<div className={backdropClasses.join(' ')} onClick={props.clicked}></div>
	) : null;
};

export default Backdrop;
