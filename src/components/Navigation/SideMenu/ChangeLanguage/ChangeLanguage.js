import React, { useContext } from 'react';

import { I18nContext } from '../../../../i18n';
import Select from '../../../UI/Select/Select';

const ChangeLanguage = (props) => {
	const { dispatch, langCode } = useContext(I18nContext);

	const options = [
		{
			key: 'en',
			value: 'English',
			selected: langCode === 'en',
		},
		{
			key: 'es',
			value: 'Español',
			selected: langCode === 'es',
		},
		{
			key: 'it',
			value: 'Italiano',
			selected: langCode === 'it',
		},
	];

	return (
		<Select
			options={options}
			optionSelected={(key) => dispatch({ type: 'setLanguage', payload: key })}
		/>
	);
};

export default ChangeLanguage;

/* <button onClick={() => dispatch({ type: 'setLanguage', payload: 'en' })}>
				ENG
			</button>
			<button onClick={() => dispatch({ type: 'setLanguage', payload: 'es' })}>
				ESP
			</button>
			<button onClick={() => dispatch({ type: 'setLanguage', payload: 'it' })}>
				IT
			</button> */
