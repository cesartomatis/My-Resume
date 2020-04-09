import React, { useContext } from 'react';
import CardView from '../../UI/CardView/CardView';

import classes from './About.module.scss';
import { I18nContext } from '../../../i18n';

const About = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<CardView>
			<div className={classes.About}>
				<div className={[classes.Boubble, classes.Sent].join(' ')}>
					<label className={classes.Text}>{translate('PRESENTATION')}</label>
				</div>

				<div className={[classes.Boubble, classes.Received].join(' ')}>
					<label className={classes.Text}>{translate('FROM_QUESTION')}</label>
				</div>
				<div className={[classes.Boubble, classes.Sent].join(' ')}>
					<label className={classes.Text}>{translate('FROM_ANSWER')}</label>
				</div>

				<div className={[classes.Boubble, classes.Received].join(' ')}>
					<label className={classes.Text}>
						{translate('DESCRIBE_QUESTION')}
					</label>
				</div>
				<div className={[classes.Boubble, classes.Sent].join(' ')}>
					<label className={classes.Text}>{translate('DESCRIBE_ANSWER')}</label>
				</div>
				<div className={[classes.Boubble, classes.Sent].join(' ')}>
					<label className={classes.Text}>{translate('MORE_ANSWER')}</label>
				</div>
			</div>
		</CardView>
	);
};

export default About;
