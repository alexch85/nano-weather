import React from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidityIcon from '../../assets/icons/wet-1.svg';
import { IMainDisplayProps } from '../../interfaces';
import BgWrapper from '../UI/bgWrapper/BgWrapper';
import Navigation from '../navigation/Navigation';
import WeatherIcon from '../UI/weatherIcon/WeatherIcon';
import { FiPlus } from 'react-icons/fi';

const MainDisplay: React.FC<IMainDisplayProps> = ({
	temp,
	humidity,
	feelsLike,
	windSpeed,
	mainWeather,
	cityName,
	searchModeToggle,
	screenWidth,
}) => {
	return (
		<BgWrapper screenWidth={screenWidth}>
			<Navigation />
			<div className={styles.locationContainer}>
				<img alt='location' src={location} height='15px' />
				{cityName}
			</div>
			<div className={styles.tempContainer}>{Math.round(temp)}°c</div>

			<div className={styles.weatherContainer}>
				{/* <img alt='weather' src={weatherIcon} height='25px' /> */}
				<WeatherIcon mainWeather={mainWeather} />
			</div>
			<div>Feels like {Math.round(feelsLike)}°C</div>
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
			<button className={styles.plusBtn} onClick={searchModeToggle}>
				<FiPlus />
			</button>
		</BgWrapper>
	);
};

export default MainDisplay;
