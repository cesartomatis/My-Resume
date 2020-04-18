import React, { useState, useContext, Fragment } from 'react';

import classes from './Select.module.scss';
import Option from './Option/Option';
import { I18nContext } from '../../../i18n';
import Backdrop from '../Backdrop/Backdrop';

const Select = (props) => {
	const { translate } = useContext(I18nContext);

	const [options, setOptions] = useState(props.options);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	if (props.close && isOpen) {
		setIsOpen(false);
	}

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

	const onClickHandler = () => {
		props.setCantClose();
		setIsOpen((state) => !state);
	};

	return (
		<Fragment>
			<Backdrop show={isOpen} clicked={onClickHandler} transparent />
			<div className={classes.Select} onClick={onClickHandler}>
				<span className={['material-icons', classes.OptionIcon].join(' ')}>
					translate
				</span>
				<label className={classes.OptionSelected}>
					{translate('LANGUAGE')}: {translate(selectedOption)}
				</label>
				<div
					className={
						isOpen
							? [classes.OptionsMenu, classes.OptionsMenuVisible].join(' ')
							: classes.OptionsMenu
					}>
					<span className={['material-icons', classes.Icon].join(' ')}>
						{isOpen ? 'expand_less' : 'expand_more'}
					</span>
					<div
						className={
							isOpen
								? [classes.Options, classes.OpenOptions].join(' ')
								: classes.Options
						}>
						{optionItems}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Select;
