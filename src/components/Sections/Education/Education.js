import React from 'react';

import CardView from '../../UI/CardView/CardView';
import classes from './Education.module.scss';
import Studies from './Studies/Studies';
import Languages from './Languages/Languages';

const Education = (props) => {
	return (
		<CardView>
			<div className={classes.Education}>
				<Studies />
				<Languages />
			</div>
		</CardView>
	);
};

export default Education;
