import React from 'react';

import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
	return <label className={classes.Title}>{props.title}</label>;
};

export default SectionTitle;
