import axios from 'axios';

const APIkey: string = '8b308b3f70fca17e387bd8aab2c848e4';

const url: string = `http://api.openweathermap.org/data/2.5/weather?q=ashkelon&units=metric&appid=${APIkey}`;

export const fetchWeather = async () => {
	const {
		data: {
			main: { temp, humidity, temp_max, temp_min, feels_like },
			wind: { speed },
			weather,
			name,
		},
	} = await axios.get(url);
	console.log(temp, humidity, weather);
	const [destructuredWeather] = weather;
	const { main } = destructuredWeather;

	return {
		temp,
		humidity,
		tempMax: temp_max,
		tempMin: temp_min,
		feelsLike: feels_like,
		windSpeed: speed,
		mainWeather: main,
		cityName: name,
	};
};
