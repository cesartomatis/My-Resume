import React from 'react';

import classes from './SocialNetworkItem.module.scss';

const SocialNetworkItem = (props) => {
	const iconClasses = [classes.Icon, classes[props.ClassName]].join(' ');
	return (
		<div className={classes.Container} onClick={() => window.open(props.url)}>
			<img className={iconClasses} src={props.icon} alt={props.url} />
		</div>
	);
};

export default SocialNetworkItem;
