import React from 'react';

import classes from './Level.module.scss';
import LevelItem from './LevelItem/LevelItem';

const Level = (props) => {
	const levels = [];
	for (let i = 0; i < props.levels; i++) {
		levels.push(<LevelItem fill />);
	}
	for (let i = 0; i < 5 - props.levels; i++) {
		levels.push(<LevelItem />);
	}
	return <div className={classes.Levels}>{levels}</div>;
};

export default Level;
