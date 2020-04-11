import React, { useContext } from 'react';

import classes from './Skills.module.scss';
import { I18nContext } from '../../../i18n/index';
import CardView from '../../UI/CardView/CardView';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import Skill from './Skill/Skill';
import ReactIcon from '../../../assets/icons/skills/react.svg';
import AngularIcon from '../../../assets/icons/skills/angular.svg';
import JSIcon from '../../../assets/icons/skills/javascript.svg';
import TSIcon from '../../../assets/icons/skills/typescript.svg';
import IonicIcon from '../../../assets/icons/skills/ionic.svg';
import ReduxIcon from '../../../assets/icons/skills/redux.svg';
import HTML5Icon from '../../../assets/icons/skills/html5.svg';
import CSS3Icon from '../../../assets/icons/skills/css3.svg';
import SASSIcon from '../../../assets/icons/skills/sass.svg';
import GitIcon from '../../../assets/icons/skills/git.svg';
import NodejsIcon from '../../../assets/icons/skills/nodejs.svg';
import MongodbIcon from '../../../assets/icons/skills/mongodb.svg';
import ExpressjsIcon from '../../../assets/icons/skills/expressjs.png';
import CSharpIcon from '../../../assets/icons/skills/csharp.svg';
import UnityIcon from '../../../assets/icons/skills/unity.svg';
import XamarinIcon from '../../../assets/icons/skills/xamarin.svg';
import VRIcon from '../../../assets/icons/skills/vr.svg';
import MySQLIcon from '../../../assets/icons/skills/mysql.svg';
import HerokuIcon from '../../../assets/icons/skills/heroku.svg';
import ScrumIcon from '../../../assets/icons/skills/scrum.png';
import AgileIcon from '../../../assets/icons/skills/agile.png';

const Skills = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<CardView>
			<div className={classes.Skills}>
				<SectionTitle title={translate('SKILLS')} />
				<div className={classes.Container}>
					<Skill icon={ReactIcon} skill="React" />
					<Skill icon={AngularIcon} skill="Angular" />
					<Skill icon={JSIcon} skill="Javascript" />
					<Skill icon={TSIcon} skill="Typescript" />
					<Skill icon={IonicIcon} skill="Ionic" />
					<Skill icon={ReduxIcon} skill="Redux" />
					<Skill icon={HTML5Icon} skill="HTML5" />
					<Skill icon={CSS3Icon} skill="CSS3" />
					<Skill icon={SASSIcon} skill="SASS" />
					<Skill icon={GitIcon} skill="Git" />
					<Skill icon={NodejsIcon} skill="Nodejs" />
					<Skill icon={MongodbIcon} skill="Mongodb" />
					<Skill icon={ExpressjsIcon} skill="Expressjs" />
					<Skill icon={CSharpIcon} skill="C#" />
					<Skill icon={UnityIcon} skill="Unity" />
					<Skill icon={XamarinIcon} skill="Xamarin" />
					<Skill icon={VRIcon} skill="VR" />
					<Skill icon={MySQLIcon} skill="MySQL" />
					<Skill icon={HerokuIcon} skill="Heroku" />
					<Skill icon={ScrumIcon} skill="Scrum" />
					<Skill icon={AgileIcon} skill="Agile" />
				</div>
			</div>
		</CardView>
	);
};

export default Skills;
