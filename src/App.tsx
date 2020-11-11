import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api';
import styles from './App.module.scss';
import DailyWeather from './components/dailyWeather/DailyWeather';
import MainDisplay from './components/mainDisplay/MainDisplay';
import SearchBox from './components/searchBox/SearchBox';
import Backdrop from './components/UI/backdrop/Backdrop';
import { todayWeather } from './interfaces';

const App: React.FC = () => {
	const [searchMode, setSearchMode] = useState(false);
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
	const [city, setCity] = useState<string | null>('london');
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
			setTodayWeather(await fetchWeather(lat, lon, city));
		};
		fetchAPI();
	}, [lat, lon, city]);

	const toggleSearchModeHandler = () => {
		setSearchMode((prevSearchMode) => !prevSearchMode);
		console.log(searchMode);
	};

	const { temp, humidity, feelsLike, windSpeed, mainWeather, cityName, tempMin, tempMax } = todayWeather;
	return (
		<div className={styles.app}>
			{searchMode && (
				<Backdrop>
					<SearchBox searchModeToggle={toggleSearchModeHandler} />
				</Backdrop>
			)}
			<MainDisplay
				searchModeToggle={toggleSearchModeHandler}
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
