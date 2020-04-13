import React, { useContext } from 'react';

import classes from './DownloadResumeItem.module.scss';
import { I18nContext } from '../../../../i18n';
import CV from '../../../../assets/cv/CV - Cesar Tomatis.pdf';

const DownloadResumeItem = (props) => {
	const { translate } = useContext(I18nContext);

	const onClickHandler = () => {
		window.open(CV);
	};

	return (
		<div className={classes.Container} onClick={onClickHandler}>
			<span className={['material-icons', classes.Icon].join(' ')}>
				cloud_download
			</span>
			<label className={classes.Text}>{translate('DOWNLOAD')}</label>
		</div>
	);
};

export default DownloadResumeItem;
