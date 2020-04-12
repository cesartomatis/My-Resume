import React from 'react';

import classes from './Option.module.scss';

const Option = (props) => {
	const optionClasses = [classes.Option];
	if (props.isSelected) {
		optionClasses.push(classes.Selected);
	}

	return (
		<div
			className={optionClasses.join(' ')}
			onClick={() => props.clicked(props.id)}>
			<label className={classes.Text}>{props.value}</label>
			{props.isSelected ? (
				<span className={['material-icons', classes.Icon].join(' ')}>done</span>
			) : null}
		</div>
	);
};

export default Option;
