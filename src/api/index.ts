import axios from 'axios';

const APIkey: string = '8b308b3f70fca17e387bd8aab2c848e4';

export const fetchWeather = async (lat: number, lon: number, city: string | undefined) => {
	try {
		let url: string;
		if (lat === 0 && lon === 0) {
			url = `http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${APIkey}`;
		}
		url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
		if (city) {
			url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
		}
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
			error: false,
		};
	} catch (error) {
		console.log(error);

		return {
			temp: 0,
			humidity: 0,
			tempMax: 0,
			tempMin: 0,
			feelsLike: 0,
			windSpeed: 0,
			mainWeather: 0,
			cityName: 0,
			error: true,
		};
	}
};

export const fetch7Days = async (lat: number, lon: number) => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=${APIkey}`;
	const {
		data: { daily },
	} = await axios.get(url);
	console.log(daily);

	const sevenDays = daily.map((i: any) => {
		const [{ main }] = i.weather;
		return {
			date: i.dt,
			weather: main,
			tempMin: i.temp.min,
			tempMax: i.temp.max,
		};
	});
	sevenDays.shift();
	console.log(sevenDays);
	return sevenDays;
};
