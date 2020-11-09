import React from 'react';
import styles from './DailyWeather.module.scss';
import { dailyWeatherPropsI } from '../../interfaces';
import SearchBox from '../searchBox/SearchBox';
import TempMinMax from '../tempMinMax/TempMinMax';

const DailyWeather: React.FC<dailyWeatherPropsI> = ({ tempMin, tempMax }) => {
	return (
		<div className={styles.dailyWeatheContainer}>
			<TempMinMax tempMin={tempMin} tempMax={tempMax} />
			{/* <SearchBox /> */}
			{/* <img alt='logo' className={styles.logo} src='/logo.svg' height='75px' /> */}
		</div>
	);
};

export default DailyWeather;
