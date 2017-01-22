import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends React.Component {
  render () {
    return (
      <div className="weather-container">
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
}

export default Weather;