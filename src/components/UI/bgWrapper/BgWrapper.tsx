import React from 'react';
import { wrapperPropsI } from '../../../interfaces';
import styles from './BgWrapper.module.scss';

const bgWrapper: React.FC<wrapperPropsI> = ({ children }) => {
	const date = new Date();
	const time = date.getHours();

	let background = '';
	if (time > 6 && time < 12) {
		background = 'url(backgrounds/bg-mobile-clear-dawn@2x.jpg';
	}
	if (time > 12 && time < 17) {
		background = 'url(backgrounds/bg-mobile-clear-noon@2x.jpg';
	}
	if (time > 17 && time < 20) {
		background = 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg';
	}
	if (time > 20 || time < 6) {
		background = 'url(backgrounds/bg-mobile-clear-night@2x.jpg';
	}

	return (
		<div className={styles.bgWrapper} style={{ backgroundImage: background }}>
			{children}
		</div>
	);
};

export default bgWrapper;
