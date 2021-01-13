import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import styles from './App.module.scss';

import { fetch7Days, fetchWeather } from './api';

//import components
import DailyWeatherDisplay from './components/dailyWeatherDisplay/DailyWeatherDisplay';
import MainDisplay from './components/mainDisplay/MainDisplay';
import OptionsMenu from './components/optionsMenu/OptionsMenu';
import Backdrop from './components/UI/backdrop/Backdrop';
import ErrorModal from './components/UI/errorModal/ErrorModal';

//import interfaces
import { ITodayWeatherProps, IWeeklyWeatherProps } from './interfaces';

const App: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [searchMode, setSearchMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const [fahrenheit, setFahrenheit] = useState(false);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [weeklyWeather, setWeeklyWeather] = useState<IWeeklyWeatherProps>([]);
  const [todayWeather, setTodayWeather] = useState<ITodayWeatherProps>({
    temp: 0,
    humidity: 0,
    tempMax: 0,
    tempMin: 0,
    feelsLike: 0,
    windSpeed: 0,
    mainWeather: '',
    cityName: '',
    error: false,
  });

  //getting the screen width on window resize
  useLayoutEffect(() => {
    const windowResizeHandler = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', windowResizeHandler);
    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  //check for geolocation in brower and get the latitude and longitude coordinates
  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      alert('Geolocation is not supported by your browser');
    }
  }, []);

  //FETCH METHODS FROM API

  //fetch current weather by longitude and latitude or city name
  const fetchAPI = useCallback(
    async (lat: number, lon: number, city: string | undefined) => {
      setLoading(true);
      setTodayWeather(await fetchWeather(lat, lon, city));
      setLoading(false);
    },
    [],
  );

  //fetch weeklyWeather by latitude and longitude
  const fetchWeeklyWeather = useCallback(async (lat: number, lon: number) => {
    setLoading(true);
    setWeeklyWeather(await fetch7Days(lat, lon));
    setLoading(false);
  }, []);

  useEffect(() => {
    // console.log(lat, lon);
    fetchAPI(lat, lon, city);
    fetchWeeklyWeather(lat, lon);
  }, [fetchAPI, fetchWeeklyWeather, lat, lon, city]);

  //toggle search weather by city
  const toggleSearchModeHandler = () => {
    if (searchMode) {
      setSearchMode((prevSearchMode) => !prevSearchMode);
      setCity(undefined);
      // fetchAPI(lat, lon, city);
    } else {
      setSearchMode((prevSearchMode) => !prevSearchMode);
    }
  };

  //toggle options menu
  const optionsModalToggleHandler = () => {
    setOptionsModal((optionsModal) => !optionsModal);
  };

  //set fahrenheit or celcius values
  const setFahrenheitHandler = () => {
    setFahrenheit((fahrenheit) => !fahrenheit);
  };

  const setCityHandler = (city: string) => {
    setCity(city);
  };

  const closeErrorHandler = () => {
    setCity(undefined);
    fetchAPI(lat, lon, city);
  };

  const {
    temp,
    humidity,
    feelsLike,
    windSpeed,
    mainWeather,
    cityName,
    error,
  } = todayWeather;

  return (
    <div className={styles.app}>
      {error && (
        <Backdrop>
          <ErrorModal closeErrorHandler={closeErrorHandler} />
        </Backdrop>
      )}
      {optionsModal && (
        <Backdrop>
          <OptionsMenu
            optionsMenuHandler={optionsModalToggleHandler}
            setFahrenheitHandler={setFahrenheitHandler}
            fahrenheit={fahrenheit}
          />
        </Backdrop>
      )}

      <MainDisplay
        searchModeToggle={toggleSearchModeHandler}
        searchMode={searchMode}
        temp={temp}
        humidity={humidity}
        feelsLike={feelsLike}
        windSpeed={windSpeed}
        mainWeather={mainWeather}
        cityName={cityName}
        screenWidth={screenWidth}
        city={city}
        loading={loading}
        optionsMenuHandler={optionsModalToggleHandler}
        fahrenheit={fahrenheit}
      />
      <DailyWeatherDisplay
        weeklyWeather={weeklyWeather}
        searchMode={searchMode}
        setCityHandler={setCityHandler}
        fahrenheit={fahrenheit}
      />
    </div>
  );
};

export default App;
