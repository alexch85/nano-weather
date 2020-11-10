import React, { useEffect, useState } from 'react';
import { wrapperPropsI } from '../../../interfaces';
import styles from './BgWrapper.module.scss';

const BgWrapper: React.FC<wrapperPropsI> = ({ children }) => {
	const [background, setBackground] = useState('');
	const setBackgroundHandler = () => {
		const dateNow = new Date();
		const timeNow = dateNow.getHours();
		console.log(timeNow);

		let background = '';

		if (timeNow >= 6 && timeNow <= 12) {
			background = 'url(backgrounds/bg-mobile-clear-dawn@2x.jpg)';
		}
		if (timeNow >= 12 && timeNow <= 17) {
			background = 'url(backgrounds/bg-mobile-clear-noon@2x.jpg)';
		}
		if (timeNow >= 17 && timeNow <= 20) {
			background = 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg)';
		}
		if (timeNow >= 20 || timeNow <= 6) {
			background = 'url(backgrounds/bg-mobile-clear-night@2x.jpg)';
		}

		return background;
	};
	useEffect(() => {
		const backgroundSet = () => {
			setBackground(setBackgroundHandler());
		};
		backgroundSet();
	}, []);

	return (
		<div
			className={styles.bgWrapper}
			style={background ? { backgroundImage: background } : { background: 'black' }}
		>
			{children}
		</div>
	);
};

export default BgWrapper;
