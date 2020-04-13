import React, { useState, useContext, useEffect } from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { I18nContext } from '../../../i18n';

const NavigationItems = (props) => {
	const { translate } = useContext(I18nContext);

	const [aboutIsActive, setAboutIsActive] = useState(true);
	const [educationIsActive, setEducationIsActive] = useState(false);
	const [experienceIsActive, setExperienceIsActive] = useState(false);
	const [skillsIsActive, setSkillsIsActive] = useState(false);

	const { activatedItem } = props;

	useEffect(() => {
		switch (activatedItem) {
			case 'aboutme':
				setAboutIsActive(true);
				setEducationIsActive(false);
				setExperienceIsActive(false);
				setSkillsIsActive(false);
				break;
			case 'education':
				setAboutIsActive(false);
				setEducationIsActive(true);
				setExperienceIsActive(false);
				setSkillsIsActive(false);
				break;
			case 'experience':
				setAboutIsActive(false);
				setEducationIsActive(false);
				setExperienceIsActive(true);
				setSkillsIsActive(false);
				break;
			case 'skills':
				setAboutIsActive(false);
				setEducationIsActive(false);
				setExperienceIsActive(false);
				setSkillsIsActive(true);
				break;
			default:
				break;
		}
	}, [activatedItem]);

	const aboutmeHandler = () => {
		setAboutIsActive(true);
		setEducationIsActive(false);
		setExperienceIsActive(false);
		setSkillsIsActive(false);
		props.navItemClicked('aboutme');
	};

	const educationHandler = () => {
		setAboutIsActive(false);
		setEducationIsActive(true);
		setExperienceIsActive(false);
		setSkillsIsActive(false);
		props.navItemClicked('education');
	};

	const experienceHandler = () => {
		setAboutIsActive(false);
		setEducationIsActive(false);
		setExperienceIsActive(true);
		setSkillsIsActive(false);
		props.navItemClicked('experience');
	};

	const skillsHandler = () => {
		setAboutIsActive(false);
		setEducationIsActive(false);
		setExperienceIsActive(false);
		setSkillsIsActive(true);
		props.navItemClicked('skills');
	};

	return (
		<div className={classes.Options}>
			<NavigationItem
				icon="assignment_ind"
				text={translate('ABOUTME')}
				isActive={aboutIsActive}
				clicked={aboutmeHandler}
			/>
			<NavigationItem
				icon="school"
				text={translate('EDUCATION')}
				isActive={educationIsActive}
				clicked={educationHandler}
			/>
			<NavigationItem
				icon="emoji_objects"
				text={translate('EXPERIENCE')}
				isActive={experienceIsActive}
				clicked={experienceHandler}
			/>
			<NavigationItem
				icon="settings"
				text={translate('SKILLS')}
				isActive={skillsIsActive}
				clicked={skillsHandler}
			/>
		</div>
	);
};

export default NavigationItems;
