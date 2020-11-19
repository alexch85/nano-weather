import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { fetch7Days, fetchWeather } from './api';
import styles from './App.module.scss';
import DailyWeather from './components/dailyWeather/DailyWeather';
import MainDisplay from './components/mainDisplay/MainDisplay';
import SearchModal from './components/searchModal/SearchModal';
import Backdrop from './components/UI/backdrop/Backdrop';
import ErrorModal from './components/UI/errorModal/ErrorModal';
import { ITodayWeatherProps } from './interfaces';

const App: React.FC = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	useLayoutEffect(() => {
		const windowResizeHandler = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', windowResizeHandler);
		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		};
	}, []);
	const [searchMode, setSearchMode] = useState(false);
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);

	const [city, setCity] = useState<string | undefined>(undefined);
	const [todayWeather, setTodayWeather] = useState<ITodayWeatherProps>({
		temp: 0,
		humidity: 0,
		tempMax: 0,
		tempMin: 0,
		feelsLike: 0,
		windSpeed: 0,
		mainWeather: '',
		cityName: '',
		error: false,
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

	const fetchAPI = useCallback(async (lat: number, lon: number, city: string | undefined) => {
		setTodayWeather(await fetchWeather(lat, lon, city));
	}, []);
	useEffect(() => {
		console.log(lat, lon);
		fetchAPI(lat, lon, city);
		fetch7Days(lat, lon);
	}, [fetchAPI, lat, lon, city]);

	const toggleSearchModeHandler = () => {
		setSearchMode((prevSearchMode) => !prevSearchMode);
	};

	const setCityHandler = (city: string) => {
		setCity(city);
	};

	const closeErrorHandler = () => {
		setCity(undefined);
		fetchAPI(lat, lon, city);
	};

	const { temp, humidity, feelsLike, windSpeed, mainWeather, cityName, tempMin, tempMax, error } = todayWeather;
	return (
		<div className={styles.app}>
			{error && (
				<Backdrop>
					<ErrorModal closeErrorHandler={closeErrorHandler} />
				</Backdrop>
			)}
			{searchMode && (
				<Backdrop>
					<SearchModal searchModeToggle={toggleSearchModeHandler} setCityHandler={setCityHandler} />
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
				screenWidth={screenWidth}
			/>
			<DailyWeather tempMin={tempMin} tempMax={tempMax} />
		</div>
	);
};

export default App;
