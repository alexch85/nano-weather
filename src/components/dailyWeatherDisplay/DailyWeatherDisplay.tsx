import React from 'react';
import styles from './DailyWeatherDisplay.module.scss';
import {
  IDailyWeatherDisplayProps,
  IDailyWeatherProps,
} from '../../interfaces';
import SearchModal from '../searchModal/SearchModal';
import DailyWeather from './dailyWeather/DailyWeather';

const DailyWeatherDisplay: React.FC<IDailyWeatherDisplayProps> = ({
  weeklyWeather,
  searchMode,
  setCityHandler,
  fahrenheit,
}) => {
  const weeklyWeatherForcast = weeklyWeather.map(
    (day: IDailyWeatherProps, i: number) => (
      <DailyWeather
        key={i++}
        date={day.date}
        tempMax={day.tempMax}
        tempMin={day.tempMin}
        weather={day.weather}
        fahrenheit={fahrenheit}
      />
    ),
  );
  return (
    <div className={styles.dailyWeatheContainer}>
      {searchMode ? (
        <SearchModal setCityHandler={setCityHandler} />
      ) : (
        <div className={styles.weatherDays}>{weeklyWeatherForcast}</div>
      )}
    </div>
  );
};

export default DailyWeatherDisplay;
