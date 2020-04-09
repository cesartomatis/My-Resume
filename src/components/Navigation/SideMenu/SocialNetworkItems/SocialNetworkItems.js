import React from 'react';

import classes from './SocialNetworkItems.module.scss';
import SocialNetworkItem from './SocialNetworkItem/SocialNetworkItem';
import GitHubIcon from '../../../../assets/icons/github.svg';
import InstagramIcon from '../../../../assets/icons/instagram.svg';
import LinkedInIcon from '../../../../assets/icons/linkedin.svg';
import StackoverflowIcon from '../../../../assets/icons/stackoverflow.svg';
import TwitterIcon from '../../../../assets/icons/twitter.svg';

const SocialNetworkItems = (props) => {
	return (
		<div className={classes.Container}>
			<SocialNetworkItem
				ClassName="Github"
				icon={GitHubIcon}
				url="https://github.com/cesartomatis"
			/>
			<SocialNetworkItem
				ClassName="LinkedIn"
				icon={LinkedInIcon}
				url="https://www.linkedin.com/in/cesartomatis/"
			/>
			<SocialNetworkItem
				ClassName="Stackoverflow"
				icon={StackoverflowIcon}
				url="https://stackoverflow.com/users/5175846/cesar-tomatis"
			/>
			<SocialNetworkItem
				ClassName="Twitter"
				icon={TwitterIcon}
				url="https://twitter.com/ctomatis"
			/>
			<SocialNetworkItem
				ClassName="Instagram"
				icon={InstagramIcon}
				url="https://www.instagram.com/cesartomatis/"
			/>
		</div>
	);
};

export default SocialNetworkItems;
