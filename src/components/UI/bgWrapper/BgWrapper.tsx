import React, { useEffect, useState } from 'react';
import { wrapperPropsI } from '../../../interfaces';
import styles from './BgWrapper.module.scss';

const BgWrapper: React.FC<wrapperPropsI> = ({ children }) => {
	const [background, setBackground] = useState('');
	const setBackgroundHandler = () => {
		const date = new Date();
		const time = date.getHours();

		let background = '';

		if (time > 6 && time < 12) {
			background = 'url(backgrounds/bg-mobile-clear-dawn@2x.jpg)';
		}
		if (time > 12 && time < 17) {
			background = 'url(backgrounds/bg-mobile-clear-noon@2x.jpg)';
		}
		if (time > 17 && time < 20) {
			background = 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg)';
		}
		if (time > 20 || time < 6) {
			background = 'url(backgrounds/bg-mobile-clear-night@2x.jpg)';
		}
		return background;
	};
	useEffect(() => {
		setBackground(setBackgroundHandler());
	}, []);

	return (
		<div className={styles.bgWrapper} style={{ backgroundImage: background }}>
			{children}
		</div>
	);
};

export default BgWrapper;
