import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  handleSearch = (location) => {
    const owm = new OpenWeatherMap(location);
    this.setState({ isLoading: true });
    owm.getTemp().then(response => {
      this.setState({
        location: location,
        temp: response,
        isLoading: false
      });
    }, reason => {
      console.log(reason);
    });
  }
  render () {
    const { isLoading, temp, location } = this.state;

    return (
      <div className="weather-container">
        <WeatherForm onSearch={ this.handleSearch }/>
        <WeatherMessage temp={ temp } location={ location } isLoading={ isLoading }/>
      </div>
    );
  }
}

export default Weather;
