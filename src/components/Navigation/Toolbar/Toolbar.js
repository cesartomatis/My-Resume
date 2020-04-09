import React from 'react';

import classes from './Toolbar.module.scss';
import MenuToggle from '../../UI/MenuToggle/MenuToggle';
import ProfilePhoto from '../../../assets/images/photo.jpeg';

const Toolbar = (props) => {
	return (
		<div className={classes.Container}>
			<div className={classes.Toolbar}>
				<MenuToggle burgerClicked={props.clicked} open={props.menuOpen} />
				<label className={classes.Title}>César Tomatis</label>
				<div className={classes.ImgContainer}>
					<img className={classes.Img} src={ProfilePhoto} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Toolbar;
