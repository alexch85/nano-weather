import React from 'react';
import styles from './Navigation.module.scss';
import options from '../../assets/icons/options.svg';
import { navPropsI } from '../../interfaces';

const Navigation: React.FC<navPropsI> = ({ searchModeToggle }) => {
	return (
		<div className={styles.navContainer}>
			<img alt='search' src='/icons/search-icon.svg' height='25px' />
			<img alt='options' src={options} height='20px' />
		</div>
	);
};

export default Navigation;
