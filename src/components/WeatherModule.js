import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherModule.css';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherModule = ({ apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError('Error fetching weather data');
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lon: longitude });
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setError('Error getting geolocation');
            setLoading(false);
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        setError('Geolocation not supported.');
        setLoading(false);
      }
    };

    getLocation();
  }, [apiKey]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>No weather data available.</p>;

  const { main: { temp }, weather } = weatherData;
  const condition = weather[0].main;

  // Pick icon
  const getIcon = () => {
    switch (condition) {
      case 'Clear':
        return <WiDaySunny className="weather-icon" />;
      case 'Clouds':
        return <WiCloud className="weather-icon" />;
      case 'Rain':
        return <WiRain className="weather-icon" />;
      case 'Snow':
        return <WiSnow className="weather-icon" />;
      case 'Thunderstorm':
        return <WiThunderstorm className="weather-icon" />;
      default:
        return <WiDaySunny className="weather-icon" />;
    }
  };

  return (
    <div className="weather-module">
      {getIcon()}
      <h3>Weather at your location</h3>
      <p>Temperature: {temp} °C</p>
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherModule;
