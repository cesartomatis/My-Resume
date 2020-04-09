import React from 'react';

import classes from './Study.module.scss';
import CalendarIcon from '../../../../UI/Icons/CalendarIcon';

const Study = (props) => {
	return (
		<div className={classes.Study}>
			<label className={classes.Title}>{props.title}</label>
			<div className={classes.University}>
				<img className={classes.Img} src={props.image} alt="" />
				<label className={classes.Text}>{props.place}</label>
			</div>
			{props.year ? (
				<label className={classes.Year}>
					<CalendarIcon /> {props.year}
				</label>
			) : null}
		</div>
	);
};

export default Study;
