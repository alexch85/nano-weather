import React from 'react';
import { IDailyWeatherProps } from '../../../interfaces';
import WeatherIcon from '../../UI/weatherIcon/WeatherIcon';
import styles from './DailyWeather.module.scss';
import cx from 'classnames';

const WeatherDay: React.FC<IDailyWeatherProps> = ({
  date,
  weather,
  tempMin,
  tempMax,
  fahrenheit,
  darkMode,
}) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date(date * 1000);
  const dayName = days[day.getDay()];
  return (
    <div
      className={
        darkMode ? cx(styles.weatherDay, styles.dark) : styles.weatherDay
      }>
      <div>{dayName}</div>
      <div className={styles.weatherIcon}>
        <WeatherIcon mainWeather={weather} type='daily' />
      </div>
      <div className={styles.tempMax}>
        {fahrenheit
          ? (Math.round(tempMax * 9) / 5 + 32).toFixed(0) + '°'
          : Math.round(tempMax) + '°'}
      </div>
      <div className={styles.tempGradient}></div>
      <div className={styles.tempMin}>
        {fahrenheit
          ? (Math.round(tempMax * 9) / 5 + 32).toFixed(0) + '°'
          : Math.round(tempMin) + '°'}
      </div>
    </div>
  );
};

export default WeatherDay;
