import React from 'react';
import styles from './DailyWeather.module.scss';
import { IDailyWeatherProps } from '../../interfaces';
import TempMinMax from '../tempMinMax/TempMinMax';

const DailyWeather: React.FC<IDailyWeatherProps> = ({ tempMin, tempMax }) => {
	return (
		<div className={styles.dailyWeatheContainer}>
			<TempMinMax tempMin={tempMin} tempMax={tempMax} />
			{/* <SearchBox /> */}
			{/* <img alt='logo' className={styles.logo} src='/logo.svg' height='75px' /> */}
		</div>
	);
};

export default DailyWeather;
