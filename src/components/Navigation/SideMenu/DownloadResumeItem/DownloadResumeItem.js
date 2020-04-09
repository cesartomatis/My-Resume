import React, { useContext } from 'react';

import classes from './DownloadResumeItem.module.scss';
import { I18nContext } from '../../../../i18n';

const DownloadResumeItem = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.Container}>
			<span className={['material-icons', classes.Icon].join(' ')}>
				cloud_download
			</span>
			<label className={classes.Text}>{translate('DOWNLOAD')}</label>
		</div>
	);
};

export default DownloadResumeItem;
