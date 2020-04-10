import React from 'react';

import CardView from '../../UI/CardView/CardView';
import classes from './Education.module.scss';
import Studies from './Studies/Studies';
import Languages from './Languages/Languages';
import Trainings from './Trainings/Trainings';

const Education = (props) => {
	return (
		<CardView>
			<div className={classes.Education}>
				<div className={classes.Container}>
					<Studies />
					<Languages />
				</div>
				<Trainings />
			</div>
		</CardView>
	);
};

export default Education;
