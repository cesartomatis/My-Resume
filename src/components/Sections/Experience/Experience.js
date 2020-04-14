import React, { useContext } from 'react';

import classes from './Experience.module.scss';
import CardView from '../../UI/CardView/CardView';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { I18nContext } from '../../../i18n/index';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import ATSistemasIcon from '../../../assets/icons/atsistemas.png';
import CentrumIcon from '../../../assets/icons/centrum.png';
import UTNIcon from '../../../assets/icons/utn.png';
import OZIcon from '../../../assets/icons/oz.png';
import CediteIcon from '../../../assets/icons/cedite.png';

const Experience = (props) => {
	const { translate } = useContext(I18nContext);

	return (
		<CardView>
			<div className={classes.Experience}>
				<SectionTitle title={translate('EXPERIENCE')} />
				<div className={classes.Container}>
					<ExperienceItem
						jobTitle={translate('FRONTEND')}
						location={translate('BARCELONA')}
						fromDate="03/2020"
						toDate="present"
						jobDescription={translate('MY_RESUME')}
						publicRepo={translate('PUBLIC_REPO')}
					/>
					<ExperienceItem
						jobTitle={translate('MERN')}
						location={translate('BARCELONA')}
						fromDate="01/2020"
						toDate="present"
						jobDescription={translate('RICETTARIO')}
						publicRepo={translate('PUBLIC_REPO')}
					/>
					<ExperienceItem
						jobTitle={translate('TITLE')}
						companyIcon={ATSistemasIcon}
						company="atSistemas"
						location={translate('BARCELONA')}
						fromDate="08/2019"
						toDate="present"
						jobDescription={translate('ATSISTEMAS')}
					/>
					<ExperienceItem
						jobTitle={translate('FRONTEND')}
						companyIcon={CentrumIcon}
						company="Centrum"
						location={translate('ROSARIO')}
						fromDate="11/2018"
						toDate="03/2019"
						jobDescription={translate('CENTRUM')}
					/>
					<ExperienceItem
						jobTitle={translate('MEAN')}
						companyIcon={UTNIcon}
						company="UTN"
						location={translate('ROSARIO')}
						fromDate="04/2018"
						toDate="04/2019"
						jobDescription={translate('FINAL_PROJECT')}
					/>
					<ExperienceItem
						jobTitle={translate('LEAD_MOBILE')}
						companyIcon={OZIcon}
						company="OZ Digital Consulting"
						location={translate('ROSARIO')}
						fromDate="06/2015"
						toDate="05/2019"
						jobDescription={translate('OZ')}
					/>
					<ExperienceItem
						jobTitle={translate('ANDROID')}
						companyIcon={CediteIcon}
						company="CeDITE"
						location={translate('ROSARIO')}
						fromDate="03/2015"
						toDate="12/2015"
						jobDescription={translate('CEDITE')}
					/>
				</div>
			</div>
		</CardView>
	);
};

export default Experience;
