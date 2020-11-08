import React from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import weatherIcon from '../../assets/icons/sun-cloudy.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidityIcon from '../../assets/icons/wet-1.svg';
import options from '../../assets/icons/options.svg';
import { mainDisplayI } from '../../interfaces';
import BgWrapper from '../UI/bgWrapper/BgWrapper';

const MainDisplay: React.FC<mainDisplayI> = ({ temp, humidity, feelsLike, windSpeed, mainWeather, cityName }) => {
	return (
		<BgWrapper>
			<div className={styles.navContainer}>
				<img alt='options' src={options} height='20px' />
			</div>
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
		</BgWrapper>
	);
};

export default MainDisplay;
