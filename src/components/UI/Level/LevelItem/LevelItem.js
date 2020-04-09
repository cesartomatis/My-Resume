import React from 'react';

import classes from './LevelItem.module.scss';

const LevelItem = (props) => {
	const pointClasses = [classes.Circle];
	if (props.fill) {
		pointClasses.push(classes.Fill);
	} else {
		pointClasses.push(classes.Empty);
	}

	return <div className={pointClasses.join(' ')}></div>;
};

export default LevelItem;
