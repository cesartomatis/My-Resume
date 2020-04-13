import React from 'react';

import classes from './SocialNetworkItem.module.scss';

const SocialNetworkItem = (props) => {
	const iconClasses = [classes.Icon, classes[props.ClassName]].join(' ');

	const onClickHandler = () => {
		window.open(props.url);
	};

	return (
		<div className={classes.Container} onClick={onClickHandler}>
			<img className={iconClasses} src={props.icon} alt={props.url} />
		</div>
	);
};

export default SocialNetworkItem;
