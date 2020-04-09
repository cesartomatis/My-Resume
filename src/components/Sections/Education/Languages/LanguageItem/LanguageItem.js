import React from 'react';

import classes from './LanguageItem.module.scss';
import Level from '../../../../UI/Level/Level';

const LanguageItem = (props) => {
	return (
		<div className={classes.LanguageItem}>
			<label className={classes.Text}>{props.lang}</label>
			<Level levels={props.levels} />
		</div>
	);
};

export default LanguageItem;
