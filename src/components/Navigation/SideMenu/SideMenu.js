import React, { Fragment, useContext } from 'react';

import classes from './SideMenu.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import ProfilePhoto from '../../../assets/images/photo.jpeg';
import SocialNetworkItems from './SocialNetworkItems/SocialNetworkItems';
import { I18nContext } from '../../../i18n/index';
import DownloadResumeItem from './DownloadResumeItem/DownloadResumeItem';

const SideMenu = (props) => {
	const { translate } = useContext(I18nContext);

	const menuClasses = [classes.SideMenu];
	if (props.open) {
		menuClasses.push(classes.Open);
	} else {
		menuClasses.push(classes.Close);
	}
	return (
		<Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={menuClasses.join(' ')} onClick={props.closed}>
				<div className={classes.DataContainer}>
					<div className={classes.ImgContainer}>
						<img className={classes.Img} src={ProfilePhoto} alt="" />
					</div>
					<div className={classes.TextContainer}>
						<label className={classes.Name}>César Tomatis</label>
						<label className={classes.Title}>{translate('TITLE')}</label>
					</div>
				</div>
				<div className={classes.NavItems}>
					<NavigationItems
						navItemClicked={props.navItemClicked}
						activatedItem={props.activatedItem}
					/>
				</div>
				<SocialNetworkItems />
				<DownloadResumeItem />
			</div>
		</Fragment>
	);
};

export default SideMenu;
