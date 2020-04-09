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

	return (
		<div className={classes.Options}>
			<NavigationItem
				icon="assignment_ind"
				text={translate('ABOUTME')}
				isActive={aboutIsActive}
				clicked={() => {
					setAboutIsActive(true);
					setEducationIsActive(false);
					setExperienceIsActive(false);
					setSkillsIsActive(false);
					props.navItemClicked('aboutme');
				}}
			/>
			<NavigationItem
				icon="school"
				text={translate('EDUCATION')}
				isActive={educationIsActive}
				clicked={() => {
					setAboutIsActive(false);
					setEducationIsActive(true);
					setExperienceIsActive(false);
					setSkillsIsActive(false);
					props.navItemClicked('education');
				}}
			/>
			<NavigationItem
				icon="emoji_objects"
				text={translate('EXPERIENCE')}
				isActive={experienceIsActive}
				clicked={() => {
					setAboutIsActive(false);
					setEducationIsActive(false);
					setExperienceIsActive(true);
					setSkillsIsActive(false);
					props.navItemClicked('experience');
				}}
			/>
			<NavigationItem
				icon="settings"
				text={translate('SKILLS')}
				isActive={skillsIsActive}
				clicked={() => {
					setAboutIsActive(false);
					setEducationIsActive(false);
					setExperienceIsActive(false);
					setSkillsIsActive(true);
					props.navItemClicked('skills');
				}}
			/>
		</div>
	);
};

export default NavigationItems;
