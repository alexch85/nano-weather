import React from 'react';
import styles from './DailyWeather.module.scss';
import { dailyWeatherPropsI } from '../../interfaces';

const DailyWeather: React.FC<dailyWeatherPropsI> = ({ tempMin, tempMax }) => {
	return (
		<div className={styles.dailyWeatheContainer}>
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
			{/* <img alt='logo' className={styles.logo} src='/logo.svg' height='75px' /> */}
		</div>
	);
};

export default DailyWeather;
