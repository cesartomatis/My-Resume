import React, { useContext } from 'react';
import CardView from '../../UI/CardView/CardView';

import classes from './About.module.scss';
import { I18nContext } from '../../../i18n';
import ProfileIcon from '../../../assets/icons/profile.svg';

const About = (props) => {
	const { translate } = useContext(I18nContext);
	const iconClasses = ['material-icons', classes.Icon];

	return (
		<CardView>
			<div className={classes.TopBar}>
				<span className={iconClasses.join(' ')}>arrow_back</span>
				<img className={classes.Img} src={ProfileIcon} alt="" />
				<div className={classes.DataContainer}>
					<label className={classes.Person}>{translate('MYSELF')}</label>
					<label className={classes.Online}>{translate('ONLINE')}</label>
				</div>
				<span className={[...iconClasses, classes.TopIcon].join(' ')}>
					videocam
				</span>
				<span className={[...iconClasses, classes.TopIcon].join(' ')}>
					phone
				</span>
				<span className={[...iconClasses, classes.TopIcon].join(' ')}>
					more_vert
				</span>
			</div>
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
			<div className={classes.MyInputContainer}>
				<div className={classes.MyInput}>
					<span className={iconClasses.join(' ')}>sentiment_satisfied_alt</span>
					<label className={classes.InputText}>{translate('ADVENTURE')}</label>
					<span className={iconClasses.join(' ')}>attach_file</span>
					<span className={iconClasses.join(' ')}>keyboard_voice</span>
				</div>
			</div>
		</CardView>
	);
};

export default About;
