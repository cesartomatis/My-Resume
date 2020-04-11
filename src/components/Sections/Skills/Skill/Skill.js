import React from 'react';

import classes from './Skill.module.scss';

const Skill = (props) => {
	const skillClass =
		props.skill !== 'C#' ? `${props.skill}Skill` : 'CSharpSkill';
	const iconClass = props.skill;

	return (
		<div className={[classes.Skill, classes[skillClass]].join(' ')}>
			<img
				className={[classes.Img, classes[iconClass]].join(' ')}
				src={props.icon}
				alt=""
			/>
			<label className={classes.Text}>{props.skill}</label>
		</div>
	);
};

export default Skill;
