import React from 'react';

import classes from './TrainingItem.module.scss';

const TrainingItem = (props) => {
	const iconClasses = [classes.Img, classes[props.iconClass]];

	const onClickHandler = () => {
		window.open(props.url);
	};

	return (
		<div className={classes.TrainingItem} onClick={onClickHandler}>
			<img className={iconClasses.join(' ')} src={props.icon} alt="" />
			<label className={classes.Text}>{props.title}</label>
		</div>
	);
};

export default TrainingItem;
