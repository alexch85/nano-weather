import React from 'react';
import styles from './DailyWeatherDisplay.module.scss';
import { IDailyWeatherDisplayProps, IDailyWeatherProps } from '../../interfaces';
import SearchModal from '../searchModal/SearchModal';
import DailyWeather from './dailyWeather/DailyWeather';
import cx from 'classnames';

const DailyWeatherDisplay: React.FC<IDailyWeatherDisplayProps> = ({
	weeklyWeather,
	searchMode,
	setCityHandler,
	darkMode,
	fahrenheit,
}) => {
	const weeklyWeatherForcast = weeklyWeather.map((day: IDailyWeatherProps, i: number) => (
		<DailyWeather
			key={i++}
			date={day.date}
			tempMax={day.tempMax}
			tempMin={day.tempMin}
			weather={day.weather}
			fahrenheit={fahrenheit}
		/>
	));
	return (
		<div className={darkMode ? cx(styles.dailyWeatheContainer, styles.dark) : styles.dailyWeatheContainer}>
			{searchMode ? (
				<SearchModal setCityHandler={setCityHandler} darkMode={darkMode} />
			) : (
				<div className={styles.weatherDays}>{weeklyWeatherForcast}</div>
			)}
		</div>
	);
};

export default DailyWeatherDisplay;
