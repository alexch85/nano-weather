import React from 'react';
import styles from './MainDisplay.module.scss';
import location from '../../assets/icons/location.svg';
import windFlag from '../../assets/icons/flag.svg';
import humidityIcon from '../../assets/icons/wet-1.svg';
import { IMainDisplayProps } from '../../interfaces';
import BgWrapper from '../UI/bgWrapper/BgWrapper';
import Navigation from '../navigation/Navigation';
import WeatherIcon from '../UI/weatherIcon/WeatherIcon';
import { FaSearchLocation } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import Loader from '../UI/loader/Loader';

const MainDisplay: React.FC<IMainDisplayProps> = ({
  temp,
  humidity,
  feelsLike,
  windSpeed,
  mainWeather,
  cityName,
  searchModeToggle,
  searchMode,
  screenWidth,
  city,
  loading,
  optionsMenuHandler,
  fahrenheit,
}) => {
  const celsiusTemp = Math.round(temp) + '°c';
  const fahrenheitTemp = (Math.round(temp * 9) / 5 + 32).toFixed(0) + '°f';
  const feelsLikeCelsius = Math.round(feelsLike) + '°c';
  const feelsLikeFahrenheit =
    (Math.round(feelsLike * 9) / 5 + 32).toFixed(0) + '°f';
  return (
    <BgWrapper screenWidth={screenWidth} city={city}>
      <Navigation optionsMenuHandler={optionsMenuHandler} />
      <div className={styles.locationContainer}>
        <img alt='location' src={location} height='15px' />
        {cityName}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.weatherContainer}>
            <WeatherIcon mainWeather={mainWeather} type='main' />
          </div>
          <div className={styles.tempContainer}>
            {fahrenheit ? fahrenheitTemp : celsiusTemp}
          </div>
          <div className={styles.feelsLikeContainer}>
            Feels like {fahrenheit ? feelsLikeFahrenheit : feelsLikeCelsius}
          </div>
        </>
      )}

      <div className={styles.sideContainer}>
        <div className={styles.humidContainer}>
          <img alt='humidity' src={humidityIcon} />
          {humidity}%
        </div>
        <div className={styles.windContainer}>
          <img alt='wind' src={windFlag} />
          North-west {windSpeed} meters per hour
        </div>
      </div>
      <div className={styles.searchBtn} onClick={searchModeToggle}>
        {!searchMode ? (
          <FaSearchLocation className={styles.searchIcon} />
        ) : (
          <RiCloseFill className={styles.searchIcon} />
        )}
      </div>
    </BgWrapper>
  );
};

export default MainDisplay;
