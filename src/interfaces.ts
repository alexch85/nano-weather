export interface ITodayWeatherProps {
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

export interface IMainDisplayProps {
	temp: number;
	humidity: number;
	feelsLike: number;
	windSpeed: number;
	mainWeather: string;
	cityName: string;
	screenWidth: number;
	searchModeToggle: () => void;
	searchMode: boolean;
	city: string | undefined;
	loading: boolean;
}

export interface IWrapperProps {
	children: React.ReactNode;
	screenWidth: number;
	city: string | undefined;
}

export interface IBackdropWrapperProps {
	children: React.ReactNode;
}

export interface ISearchModalProps {
	setCityHandler: (city: string) => void;
}

export interface IDailyWeatherProps {
	date: number;
	weather: string;
	tempMin: number;
	tempMax: number;
}
export interface IDailyWeatherDisplayProps {
	weeklyWeather: IWeeklyWeatherProps;
	setCityHandler: (city: string) => void;
	searchMode: boolean;
}

export interface INavProps {}

export interface IErrorModalProps {
	closeErrorHandler: () => void;
}

export interface IWeatherIconProps {
	mainWeather: string;
	type: string;
}

export interface IWeeklyWeatherProps {
	[x: string]: any;
	[i: number]: {
		date: number;
		weather: string;
		tempMin: number;
		tempMax: number;
	};
}
