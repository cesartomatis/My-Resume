import React from 'react';

import classes from './CardView.module.scss';

const CardView = (props) => {
	return <div className={classes.CardView}>{props.children}</div>;
};

export default CardView;
