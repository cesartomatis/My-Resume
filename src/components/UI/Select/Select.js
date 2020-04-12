import React, { useState, useContext } from 'react';

import classes from './Select.module.scss';
import Option from './Option/Option';
import { I18nContext } from '../../../i18n';

const Select = (props) => {
	const { translate } = useContext(I18nContext);

	const [options, setOptions] = useState(props.options);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const optionSelectedHandler = (key) => {
		const optionsAux = [...options];
		const newOptions = optionsAux.map((o) => {
			if (o.key === key) {
				o.selected = true;
			} else {
				o.selected = false;
			}
			return o;
		});
		setOptions(newOptions);
		props.optionSelected(key);
	};

	const optionItems = options.map((opt) => {
		if (opt.selected && selectedOption !== opt.value) {
			setSelectedOption(opt.value);
		}
		return (
			<Option
				key={opt.key}
				id={opt.key}
				value={opt.value}
				isSelected={opt.selected}
				clicked={optionSelectedHandler}
			/>
		);
	});

	return (
		<div
			className={classes.Select}
			onClick={() => setIsOpen((state) => !state)}>
			<label className={classes.OptionSelected}>
				{translate('LANGUAGE')}: {translate(selectedOption)}
			</label>
			<span className={['material-icons', classes.Icon].join(' ')}>
				{isOpen ? 'expand_less' : 'expand_more'}
			</span>
			{isOpen ? <div className={classes.Options}>{optionItems}</div> : null}
		</div>
	);
};

export default Select;
