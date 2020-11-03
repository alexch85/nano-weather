import React from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import weather from '../../assets/icons/sun-cloudy.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidity from '../../assets/icons/wet-1.svg';

const MainDisplay: React.FC = () => {
	return (
		<div className={styles.mainDisplayContainer}>
			<div className={styles.navContainer}>navigation</div>
			<div className={styles.dateContainer}>{new Date().toDateString()}</div>
			<div className={styles.locationContainer}>
				<img alt='location' src={location} height='15px' style={{ marginRight: '5px' }} />
				Madrid
			</div>
			<div className={styles.tempContainer}>21°</div>
			<div className={styles.weatherContainer}>
				<img alt='location' src={weather} height='25px' style={{ marginRight: '5px' }} />
				cloudy
			</div>
			<div className={styles.sideContainer}>
				<div className={styles.humidContainer}>
					<img alt='location' src={humidity} height='15px' style={{ marginRight: '5px' }} />
				</div>
				<div className={styles.windContainer}>
					<img alt='location' src={windFlag} height='15px' style={{ marginRight: '5px' }} />
				</div>
			</div>
		</div>
	);
};

export default MainDisplay;
