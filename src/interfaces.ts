export interface todayWeather {
	temp: number;
	humidity: number;
	tempMin: number;
	tempMax: number;
	feelsLike: number;
	windSpeed: number;
	mainWeather: string;
	cityName: string;
	error: boolean;
}

export interface mainDisplayI {
	temp: number;
	humidity: number;
	feelsLike: number;
	windSpeed: number;
	mainWeather: string;
	cityName: string;
	searchModeToggle: () => void;
}

export interface wrapperPropsI {
	children: React.ReactNode;
}

export interface backdropWrapperPropsI {
	children: React.ReactNode;
}

export interface ISearchBoxProps {
	searchModeToggle: () => void;
	searchByCity: () => void;
	cityValue: string;
	setCityHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface dailyWeatherPropsI {
	tempMin: number;
	tempMax: number;
}

export interface navPropsI {
	searchModeToggle: () => void;
}

export interface IErrorModalProps {
	closeErrorHandler: () => void;
}
