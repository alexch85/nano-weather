import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
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
			console.log('Not Available');
		}
	}, []);
	return (
		<div className={styles.app}>
			<MainDisplay lat={lat} lon={lon} />
		</div>
	);
};

export default App;
