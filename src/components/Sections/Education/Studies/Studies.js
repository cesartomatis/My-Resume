import React, { useContext } from 'react';

import classes from './Studies.module.scss';
import { I18nContext } from '../../../../i18n/index';
import Study from './Study/Study';
import UTNIcon from '../../../../assets/icons/utn.png';
import CambridgeIcon from '../../../../assets/icons/cambridge.png';
import SectionTitle from '../../../UI/SectionTitle/SectionTitle';

const Studies = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.Studies}>
			<SectionTitle title={translate('STUDIES')} />
			<div className={classes.Container}>
				<Study
					title={translate('SYSTEMS_ANALYST')}
					image={UTNIcon}
					year="2019"
					place="UTN - Facultad Regional Rosario"
				/>
				<Study
					title="First Certificate in English"
					image={CambridgeIcon}
					place="University of Cambridge"
				/>
			</div>
		</div>
	);
};

export default Studies;
