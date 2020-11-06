import React from 'react';
import styles from './DailyWeather.module.scss';

const DailyWeather: React.FC = () => {
	return (
		<div className={styles.dailyWeatheContainer}>
			<div className={styles.dateContainer}>{new Date().toDateString()}</div>
			<div className={styles.tempMinMaxContainer}>
				<div className={styles.minTemp}>
					<p>15°C</p>
				</div>
				<div className={styles.tempGradient}>
					<div>min</div>
					<div>max</div>
				</div>
				<div className={styles.maxTemp}>
					<p>22°C</p>
				</div>
			</div>
			<img alt='logo' className={styles.logo} src='/logo.svg' height='75px' />
		</div>
	);
};

export default DailyWeather;
