import React from 'react';
import styles from './TempMinMax.module.scss';
import { dailyWeatherPropsI } from '../../interfaces';

const tempMinMax: React.FC<dailyWeatherPropsI> = ({ tempMin, tempMax }) => {
	return (
		<div>
			<div className={styles.dateContainer}>{new Date().toDateString()}</div>
			<div className={styles.tempMinMaxContainer}>
				<div className={styles.minTemp}>
					<p>{Math.round(tempMin)}°C</p>
				</div>
				<div className={styles.tempGradient}>
					<div>min</div>
					<div>max</div>
				</div>
				<div className={styles.maxTemp}>
					<p>{Math.round(tempMax)}°C</p>
				</div>
			</div>
		</div>
	);
};

export default tempMinMax;
