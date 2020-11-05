import React, { useEffect, useState } from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import weatherIcon from '../../assets/icons/sun-cloudy.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidityIcon from '../../assets/icons/wet-1.svg';
import options from '../../assets/icons/options.svg';
import { fetchWeather } from '../../api/index';
import { todayWeather } from '../../interfaces';

const MainDisplay: React.FC = () => {
	const [todayWeather, setTodayWeather] = useState<todayWeather>({
		temp: 0,
		humidity: 0,
		tempMax: 0,
		tempMin: 0,
		feelsLike: 0,
		windSpeed: 0,
		mainWeather: '',
		cityName: '',
	});

	useEffect(() => {
		const fetchAPI = async () => {
			setTodayWeather(await fetchWeather());
		};
		fetchAPI();
	}, []);

	const { temp, humidity, feelsLike, windSpeed, mainWeather, cityName } = todayWeather;

	return (
		<div
			className={styles.mainDisplayContainer}
			style={{ backgroundImage: 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg)' }}
		>
			<div className={styles.navContainer}>
				<img alt='options' src={options} height='20px' />
			</div>
			<div className={styles.dateContainer}>{new Date().toDateString()}</div>
			<div className={styles.locationContainer}>
				<img alt='location' src={location} height='15px' />
				{cityName}
			</div>
			<div className={styles.tempContainer}>{Math.round(temp)}°</div>

			<div className={styles.weatherContainer}>
				<img alt='weather' src={weatherIcon} height='25px' />
				{mainWeather}
			</div>
			<div>Feels like {Math.round(feelsLike)}°</div>
			<div className={styles.sideContainer}>
				<div className={styles.humidContainer}>
					<img
						alt='humidity'
						src={humidityIcon}
						height='15px'
						style={{ marginRight: '5px', marginLeft: '-2px' }}
					/>
					{humidity}%
				</div>
				<div className={styles.windContainer}>
					<img alt='wind' src={windFlag} height='12px' />
					North-west {windSpeed} meters per hour
				</div>
			</div>
		</div>
	);
};

export default MainDisplay;
