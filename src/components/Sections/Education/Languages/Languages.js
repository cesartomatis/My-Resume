import React, { useContext } from 'react';

import classes from './Languages.module.scss';
import SectionTitle from '../../../UI/SectionTitle/SectionTitle';
import { I18nContext } from '../../../../i18n';
import LanguageItem from './LanguageItem/LanguageItem';

const Languages = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.Languages}>
			<SectionTitle title={translate('LANGUAGES')} />
			<div className={classes.Container}>
				<LanguageItem lang={translate('SPANISH')} levels="5" />
				<LanguageItem lang={translate('ENGLISH')} levels="4" />
				<LanguageItem lang={translate('ITALIAN')} levels="3" />
			</div>
		</div>
	);
};

export default Languages;
