import axios from 'axios';

const APIkey: string | undefined = process.env.REACT_APP_WEATHER_API_KEY;

//fetch weather from api by latitude and longitude or by city name
export const fetchWeather = async (
  lat: number,
  lon: number,
  city: string | undefined,
) => {
  try {
    let url: string;
    if (lat === 0 && lon === 0) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${APIkey}`;
    }
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
    }
    const {
      data: {
        main: { temp, humidity, temp_max, temp_min, feels_like },
        wind: { speed },
        weather,
        name,
      },
    } = await axios.get(url);
    // const [destructuredWeather] = weather;
    const [{ main }] = weather;

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

//fetch weather for 7 week days
export const fetch7Days = async (lat: number, lon: number) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=${APIkey}`;
    const {
      data: { daily },
    } = await axios.get(url);

    const sevenDays = daily.map((i: any) => {
      const [{ main }] = i.weather;
      return {
        date: i.dt,
        weather: main,
        tempMin: i.temp.min,
        tempMax: i.temp.max,
      };
    });
    //remove first day from array
    sevenDays.shift();
    return sevenDays;
  } catch (error) {
    console.log(`error ${error} - something went wrong`);
  }
};
