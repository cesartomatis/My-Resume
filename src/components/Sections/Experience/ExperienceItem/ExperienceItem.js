import React from 'react';

import classes from './ExperienceItem.module.scss';
import LocationIcon from '../../../UI/Icons/LocationIcon';
import CalendarIcon from '../../../UI/Icons/CalendarIcon';

const ExperienceItem = (props) => {
	return (
		<div className={classes.ExperienceItem}>
			<label className={classes.JobTitle}>{props.jobTitle}</label>
			<div className={classes.Info}>
				{props.company ? (
					<div className={classes.Company}>
						<img className={classes.Icon} src={props.companyIcon} alt="" />
						<label className={classes.CompanyInfo}>{props.company} - </label>
					</div>
				) : null}
				<label className={classes.LocationInfo}>
					<LocationIcon /> {props.location}
				</label>
				<label className={classes.Date}>
					<CalendarIcon /> {props.fromDate} - {props.toDate}
				</label>
			</div>
			<label className={classes.JobDescription}>{props.jobDescription}</label>
			<label className={classes.JobDescription}>{props.publicRepo}</label>
		</div>
	);
};

export default ExperienceItem;
