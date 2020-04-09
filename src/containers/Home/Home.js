import React, { useRef, useState, useEffect } from 'react';

import classes from './Home.module.scss';
import About from '../../components/Sections/About/About';
import Education from '../../components/Sections/Education/Education';
import Experience from '../../components/Sections/Experience/Experience';
import Skills from '../../components/Sections/Skills/Skills';

const scrollToRef = (ref) => {
	if (window.matchMedia('(min-width: 668px)').matches) {
		window.scrollTo(0, ref?.offsetTop);
	} else {
		window.scrollTo(0, ref?.offsetTop - 100);
	}
};

const Home = (props) => {
	const [aboutRef, setAboutRef] = useState(useRef(null));
	const [educationRef, setEducationRef] = useState(useRef(null));
	const [experienceRef, setExperienceRef] = useState(useRef(null));
	const [skillsRef, setSkillsRef] = useState(useRef(null));

	const { scrollTo, activatedItem } = props;

	useEffect(() => {
		let isScrolling;
		document.addEventListener('scroll', () => {
			window.clearTimeout(isScrolling);
			isScrolling = setTimeout(() => {
				if (
					window.scrollY >=
					experienceRef?.offsetTop + experienceRef?.clientHeight / 2
				) {
					activatedItem('skills');
				} else if (
					window.scrollY >=
					educationRef?.offsetTop + educationRef?.clientHeight / 2
				) {
					activatedItem('experience');
				} else if (
					window.scrollY >=
					aboutRef?.offsetTop + aboutRef?.clientHeight / 2
				) {
					activatedItem('education');
				} else if (
					window.scrollY <=
					aboutRef?.offsetTop + aboutRef?.clientHeight / 2
				) {
					activatedItem('aboutme');
				}
			}, 100);
		});
	}, [aboutRef, educationRef, experienceRef, activatedItem]);

	useEffect(() => {
		if (scrollTo) {
			switch (scrollTo) {
				case 'aboutme':
					scrollToRef(aboutRef);
					break;
				case 'education':
					scrollToRef(educationRef);
					break;
				case 'experience':
					scrollToRef(experienceRef);
					break;
				case 'skills':
					scrollToRef(skillsRef);
					break;
				default:
					scrollToRef(aboutRef);
					break;
			}
		}
	}, [scrollTo, aboutRef, educationRef, skillsRef, experienceRef]);

	return (
		<div className={classes.Home}>
			<section className={classes.Container} ref={(ref) => setAboutRef(ref)}>
				<About />
			</section>
			<section
				className={classes.Container}
				ref={(ref) => setEducationRef(ref)}>
				<Education />
			</section>
			<section
				className={classes.Container}
				ref={(ref) => setExperienceRef(ref)}>
				<Experience />
			</section>
			<section className={classes.Container} ref={(ref) => setSkillsRef(ref)}>
				<Skills />
			</section>
		</div>
	);
};

export default Home;
