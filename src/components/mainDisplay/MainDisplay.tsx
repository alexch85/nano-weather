import React from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import weather from '../../assets/icons/sun-cloudy.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidity from '../../assets/icons/wet-1.svg';
import options from '../../assets/icons/options.svg';

const MainDisplay: React.FC = () => {
	return (
		<div
			className={styles.mainDisplayContainer}
			style={{ backgroundImage: 'url(backgrounds/bg-mobile-clear-dusk@2x.jpg)' }}
		>
			<div className={styles.navContainer}>
				<img alt='options' src={options} height='20px' />
			</div>
			<div className={styles.dateContainer}>{new Date().toDateString()}</div>
			<div className={styles.locationContainer}>
				<img alt='location' src={location} height='15px' />
				Madrid
			</div>
			<div className={styles.tempContainer}>21°</div>
			<div className={styles.weatherContainer}>
				<img alt='weather' src={weather} height='25px' />
				cloudy
			</div>
			<div className={styles.sideContainer}>
				<div className={styles.humidContainer}>
					<img
						alt='humidity'
						src={humidity}
						height='15px'
						style={{ marginRight: '5px', marginLeft: '-2px' }}
					/>
					52%
				</div>
				<div className={styles.windContainer}>
					<img alt='wind' src={windFlag} height='12px' />
					North-west 5 meters per hour
				</div>
			</div>
		</div>
	);
};

export default MainDisplay;
