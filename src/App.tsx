import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import DailyWeather from './components/dailyWeather/DailyWeather';
import MainDisplay from './components/mainDisplay/MainDisplay';

const App: React.FC = () => {
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);
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
	return (
		<div className={styles.app}>
			<MainDisplay lat={lat} lon={lon} />
			<DailyWeather />
		</div>
	);
};

export default App;
