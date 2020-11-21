import React from 'react';
import { IDailyWeatherProps } from '../../../interfaces';
import WeatherIcon from '../../UI/weatherIcon/WeatherIcon';
import styles from './DailyWeather.module.scss';

const WeatherDay: React.FC<IDailyWeatherProps> = ({ date, weather, tempMin, tempMax }) => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const day = new Date(date * 1000);
	const dayName = days[day.getDay()];
	return (
		<div className={styles.weatherDay}>
			<div>{dayName}</div>
			<div className={styles.weatherIcon}>
				<WeatherIcon mainWeather={weather} type='daily' />
			</div>
			<div className={styles.tempMax}>{Math.round(tempMax)}°c</div>
			<div className={styles.tempGradient}></div>
			<div className={styles.tempMin}>{Math.round(tempMin)}°c</div>
		</div>
	);
};

export default WeatherDay;
