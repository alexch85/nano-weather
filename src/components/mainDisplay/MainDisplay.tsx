import React from 'react';
import styles from './MainDisplay.module.scss';

const MainDisplay: React.FC = () => {
	return (
		<div className={styles.mainDisplayContainer}>
			<div>{new Date().toDateString()}</div>
		</div>
	);
};

export default MainDisplay;
