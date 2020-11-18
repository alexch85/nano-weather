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
}

export interface IWrapperProps {
	children: React.ReactNode;
	screenWidth: number;
}

export interface IBackdropWrapperProps {
	children: React.ReactNode;
}

export interface ISearchBoxProps {
	searchModeToggle: () => void;
	searchByCity: () => void;
	cityValue: string;
	setCityHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IDailyWeatherProps {
	tempMin: number;
	tempMax: number;
}

export interface INavProps {}

export interface IErrorModalProps {
	closeErrorHandler: () => void;
}

export interface IWeatherIconProps {
	mainWeather: string;
}
