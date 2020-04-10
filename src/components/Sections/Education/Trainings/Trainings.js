import React, { useContext } from 'react';

import classes from './Trainings.module.scss';
import TrainingItem from './TrainingItem/TrainingItem';
import UdemyIcon from '../../../../assets/icons/udemy.svg';
import SectionTitle from '../../../UI/SectionTitle/SectionTitle';
import { I18nContext } from '../../../../i18n';

const Trainings = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<div className={classes.Trainings}>
			<SectionTitle title={translate('TRAININGS')} />
			<div className={classes.Container}>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="React - The complete guide (incl Hooks, React Router , Redux)"
					url="https://www.udemy.com/certificate/UC-fdd7c0e8-567b-4864-bbec-9e24d4b807c2/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Angular & NodeJS - The MEAN Stack Guide"
					url="https://www.udemy.com/certificate/UC-D7CNT5SJ/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Angular - The complete guide"
					url="https://www.udemy.com/certificate/UC-QYEO7NIH/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="The complete NodeJS developer course"
					url="https://www.udemy.com/certificate/UC-NYBBW9IB/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Create a CRUD application with Ionic"
					url="https://www.udemy.com/certificate/UC-M1HCLF6D/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Make Mobile VR Games in Unity with C#"
					url="https://www.udemy.com/certificate/UC-UREK5RH8/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Design patterns in C# and .NET"
					url="https://www.udemy.com/certificate/UC-9VVW2EFL/"
				/>
				<TrainingItem
					iconClass="Udemy"
					icon={UdemyIcon}
					title="Complete C# Unity Developer"
					url="https://www.udemy.com/certificate/UC-DFRWKNK9/"
				/>
			</div>
		</div>
	);
};

export default Trainings;
