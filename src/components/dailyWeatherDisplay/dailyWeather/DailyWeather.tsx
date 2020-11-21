import React from 'react';
import { IDailyWeatherProps } from '../../../interfaces';
import WeatherIcon from '../../UI/weatherIcon/WeatherIcon';
import styles from './DailyWeather.module.scss';

const WeatherDay: React.FC<IDailyWeatherProps> = ({ date, weather, tempMin, tempMax }) => {
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var d = new Date(date * 1000);
	var dayName = days[d.getDay()];
	console.log(dayName);
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
