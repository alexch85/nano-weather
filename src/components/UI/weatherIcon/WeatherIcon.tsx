import React from 'react';
import { IWeatherIconProps } from '../../../interfaces';

const weatherIcon: React.FC<IWeatherIconProps> = ({ mainWeather, type }) => {
	let weatherIcon = '/icons/sun.svg';
	console.log(mainWeather);
	if (type === 'main') {
		switch (mainWeather) {
			case 'Clear':
				weatherIcon = '/icons/sun.svg';
				break;
			case 'Few clouds':
				weatherIcon = '/icons/sun-cloudy.svg';
				break;
			case 'Clouds':
				weatherIcon = '/icons/sun-very-cloudy.svg';
				break;
			case 'Rain':
				weatherIcon = '/icons/rain.svg';
				break;
			case 'Shower rain':
				weatherIcon = '/icons/rain.svg';
				break;
			case 'Thunderstorm':
				weatherIcon = '/icons/storm-cloud.svg';
				break;
			case 'Snow':
				weatherIcon = '/icons/snow.svg';
				break;
			case 'Mist':
				weatherIcon = '/icons/mist.svg';
				break;
			default:
				weatherIcon = '/icons/sun.svg';
		}
	}
	if (type === 'daily') {
		switch (mainWeather) {
			case 'Clear':
				weatherIcon = '/icons/sun-c.svg';
				break;
			case 'Few clouds':
				weatherIcon = '/icons/sun-cloudy-c.svg';
				break;
			case 'Clouds':
				weatherIcon = '/icons/sun-very-cloudy-c.svg';
				break;
			case 'Rain':
				weatherIcon = '/icons/rainy-cloud.svg';
				break;
			case 'Shower rain':
				weatherIcon = '/icons/rain-c.svg';
				break;
			case 'Thunderstorm':
				weatherIcon = '/icons/storm-cloud-c.svg';
				break;
			case 'Snow':
				weatherIcon = '/icons/snow-c.svg';
				break;
			case 'Mist':
				weatherIcon = '/icons/mist.svg';
				break;
			default:
				weatherIcon = '/icons/sun-c.svg';
		}
	}

	return (
		<>
			<img alt='weather' src={weatherIcon} height='25px' style={{ marginRight: '5px' }} />
			{type === 'main' && mainWeather}
		</>
	);
};

export default weatherIcon;
