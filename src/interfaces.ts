export interface todayWeather {
	temp: number;
	humidity: number;
	tempMin: number;
	tempMax: number;
	feelsLike: number;
	windSpeed: number;
	mainWeather: string;
	cityName: string;
}

export interface mainDisplayI {
	lat: number;
	lon: number;
}
