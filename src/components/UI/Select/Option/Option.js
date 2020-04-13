import React, { useContext } from 'react';

import classes from './Option.module.scss';
import { I18nContext } from '../../../../i18n';

const Option = (props) => {
	const { translate } = useContext(I18nContext);

	const optionClasses = [classes.Option];
	if (props.isSelected) {
		optionClasses.push(classes.Selected);
	}

	const onClickHandler = () => {
		props.clicked(props.id);
	};

	return (
		<div className={optionClasses.join(' ')} onClick={onClickHandler}>
			<label className={classes.Text}>{translate(props.value)}</label>
			{props.isSelected ? (
				<span className={['material-icons', classes.Icon].join(' ')}>done</span>
			) : null}
		</div>
	);
};

export default Option;
