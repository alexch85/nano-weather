import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { fetch7Days, fetchWeather } from './api';
import styles from './App.module.scss';
import DailyWeatherDisplay from './components/dailyWeatherDisplay/DailyWeatherDisplay';
import MainDisplay from './components/mainDisplay/MainDisplay';
import OptionsMenu from './components/optionsMenu/OptionsMenu';
import Backdrop from './components/UI/backdrop/Backdrop';
import ErrorModal from './components/UI/errorModal/ErrorModal';
import { ITodayWeatherProps, IWeeklyWeatherProps } from './interfaces';
import cx from 'classnames';

const App: React.FC = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [searchMode, setSearchMode] = useState(false);
	const [loading, setLoading] = useState(false);
	const [optionsModal, setOptionsModal] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [fahrenheit, setFahrenheit] = useState(false);
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
	//Getting the screen width on window resize
	useLayoutEffect(() => {
		const windowResizeHandler = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', windowResizeHandler);
		return () => {
			window.removeEventListener('resize', windowResizeHandler);
		};
	}, []);

	const [weeklyWeather, setWeeklyWeather] = useState<IWeeklyWeatherProps>([]);

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

	//Fetch methods from API
	const fetchAPI = useCallback(async (lat: number, lon: number, city: string | undefined) => {
		setLoading(true);
		setTodayWeather(await fetchWeather(lat, lon, city));
		setLoading(false);
	}, []);

	const fetchWeeklyWeather = useCallback(async (lat: number, lon: number) => {
		setLoading(true);
		setWeeklyWeather(await fetch7Days(lat, lon));
		setLoading(false);
	}, []);

	useEffect(() => {
		console.log(lat, lon);
		fetchAPI(lat, lon, city);
		fetchWeeklyWeather(lat, lon);
	}, [fetchAPI, fetchWeeklyWeather, lat, lon, city]);

	const toggleSearchModeHandler = () => {
		if (searchMode) {
			setSearchMode((prevSearchMode) => !prevSearchMode);
			setCity(undefined);
			// fetchAPI(lat, lon, city);
		} else {
			setSearchMode((prevSearchMode) => !prevSearchMode);
		}
	};

	const optionsModalHandler = () => {
		setOptionsModal((optionsModal) => !optionsModal);
	};

	const setDarkModeHandler = () => {
		setDarkMode((darkMode) => !darkMode);
	};

	const setFahrenheitHandler = () => {
		setFahrenheit((fahrenheit) => !fahrenheit);
	};

	const setCityHandler = (city: string) => {
		setCity(city);
	};

	const closeErrorHandler = () => {
		setCity(undefined);
		fetchAPI(lat, lon, city);
	};

	const { temp, humidity, feelsLike, windSpeed, mainWeather, cityName, error } = todayWeather;

	return (
		<div className={darkMode ? cx(styles.app, styles.dark) : styles.app}>
			{error && (
				<Backdrop>
					<ErrorModal closeErrorHandler={closeErrorHandler} darkMode={darkMode} />
				</Backdrop>
			)}
			{optionsModal && (
				<Backdrop>
					<OptionsMenu
						optionsMenuHandler={optionsModalHandler}
						setDarkModeHandler={setDarkModeHandler}
						setFahrenheitHandler={setFahrenheitHandler}
						fahrenheit={fahrenheit}
						darkMode={darkMode}
					/>
				</Backdrop>
			)}

			<MainDisplay
				searchModeToggle={toggleSearchModeHandler}
				searchMode={searchMode}
				temp={temp}
				humidity={humidity}
				feelsLike={feelsLike}
				windSpeed={windSpeed}
				mainWeather={mainWeather}
				cityName={cityName}
				screenWidth={screenWidth}
				city={city}
				loading={loading}
				optionsMenuHandler={optionsModalHandler}
				fahrenheit={fahrenheit}
			/>
			<DailyWeatherDisplay
				weeklyWeather={weeklyWeather}
				searchMode={searchMode}
				setCityHandler={setCityHandler}
				darkMode={darkMode}
				fahrenheit={fahrenheit}
			/>
		</div>
	);
};

export default App;
