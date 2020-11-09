import React from 'react';
import styles from './Backdrop.module.scss';
import { backdropWrapperPropsI } from '../../../interfaces';

const Backdrop: React.FC<backdropWrapperPropsI> = ({ children, searchModeToggle }) => {
	return (
		<div className={styles.backdrop} onClick={searchModeToggle}>
			{children}
		</div>
	);
};

export default Backdrop;
