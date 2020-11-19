import React from 'react';
import styles from './DailyWeather.module.scss';

const WeatherDay = () => {
	return (
		<div className={styles.weatherDay}>
			<div>19.11</div>
			<div className={styles.tempMax}>20°c</div>
			<div className={styles.tempGradient}></div>
			<div className={styles.tempMin}>17°c</div>
		</div>
	);
};

export default WeatherDay;
