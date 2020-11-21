import React from 'react';
import styles from './DailyWeatherDisplay.module.scss';
import { IDailyWeatherDisplayProps, IDailyWeatherProps } from '../../interfaces';
// import TempMinMax from '../tempMinMax/TempMinMax';
import DailyWeather from './dailyWeather/DailyWeather';

const DailyWeatherDisplay: React.FC<IDailyWeatherDisplayProps> = ({ weeklyWeather }) => {
	console.log(weeklyWeather);
	const weeklyWeatherForcast = weeklyWeather.map((day: IDailyWeatherProps) => (
		<DailyWeather date={day.date} tempMax={day.tempMax} tempMin={day.tempMin} weather={day.weather} />
	));
	return (
		<div className={styles.dailyWeatheContainer}>
			{/* <TempMinMax tempMin={tempMin} tempMax={tempMax} /> */}
			<div className={styles.weatherDays}>{weeklyWeatherForcast}</div>
			{/* <SearchBox /> */}
			{/* <img alt='logo' className={styles.logo} src='/logo.svg' height='75px' /> */}
		</div>
	);
};

export default DailyWeatherDisplay;
