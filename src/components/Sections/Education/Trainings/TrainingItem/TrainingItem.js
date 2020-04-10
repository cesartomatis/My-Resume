import React from 'react';

import classes from './TrainingItem.module.scss';

const TrainingItem = (props) => {
	const iconClasses = [classes.Img, classes[props.iconClass]];

	return (
		<div
			className={classes.TrainingItem}
			onClick={() => window.open(props.url)}>
			<img className={iconClasses.join(' ')} src={props.icon} alt="" />
			<label className={classes.Text}>{props.title}</label>
		</div>
	);
};

export default TrainingItem;
