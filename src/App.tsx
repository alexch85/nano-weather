import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api';
import styles from './App.module.scss';
import DailyWeather from './components/dailyWeather/DailyWeather';
import MainDisplay from './components/mainDisplay/MainDisplay';
import { todayWeather } from './interfaces';

const App: React.FC = () => {
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
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
		if ('geolocation' in navigator) {
			console.log('Available');
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLon(position.coords.longitude);
			});
		} else {
			alert('Geolocation is not supported by your browser');
		}
	}, []);

	useEffect(() => {
		console.log(lat, lon);
		const fetchAPI = async () => {
			setTodayWeather(await fetchWeather(lat, lon));
		};
		fetchAPI();
	}, [lat, lon]);

	const { temp, humidity, feelsLike, windSpeed, mainWeather, cityName, tempMin, tempMax } = todayWeather;
	return (
		<div className={styles.app}>
			<MainDisplay
				temp={temp}
				humidity={humidity}
				feelsLike={feelsLike}
				windSpeed={windSpeed}
				mainWeather={mainWeather}
				cityName={cityName}
			/>
			<DailyWeather tempMin={tempMin} tempMax={tempMax} />
		</div>
	);
};

export default App;
