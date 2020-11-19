import React from 'react';
import styles from './DailyWeatherDisplay.module.scss';
import { IDailyWeatherProps } from '../../interfaces';
import TempMinMax from '../tempMinMax/TempMinMax';
import WeatherDay from './dailyWeather/DailyWeather';

const DailyWeather: React.FC<IDailyWeatherProps> = ({ tempMin, tempMax }) => {
	return (
		<div className={styles.dailyWeatheContainer}>
			{/* <TempMinMax tempMin={tempMin} tempMax={tempMax} /> */}
			<div className={styles.weatherDays}>
				<WeatherDay />
				<WeatherDay />
				<WeatherDay />
				<WeatherDay />
				<WeatherDay />
				<WeatherDay />
				<WeatherDay />
			</div>

			{/* <SearchBox /> */}
			{/* <img alt='logo' className={styles.logo} src='/logo.svg' height='75px' /> */}
		</div>
	);
};

export default DailyWeather;
