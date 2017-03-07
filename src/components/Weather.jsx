import React from 'react';
import WeatherForm from './WeatherForm';
import ErrorModal from './ErrorModal';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
	state = {
		isLoading: false
	};
  constructor (props) {
    super(props);
  }

  componentDidMount = () => {
    const location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps = (newProps) => {
    const location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  };

  handleSearch = (location) => {
    const owm = new OpenWeatherMap(location);
    this.setState({
    	isLoading: true,
			errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    owm.getTemp()
			.then(response => {
				this.setState({
					location: location,
					temp: response,
					isLoading: false
				});
			})
			.catch(reason => {
				this.setState({
					isLoading: false,
					errorMessage: reason.response.data.message
				});
			});
  };
	handleErrorClose = () => {
		this.setState({errorMessage: undefined});
	};
  render () {
    const { isLoading, temp, location, errorMessage } = this.state;

    return (
      <div>
        <WeatherForm onSearch={ this.handleSearch }/>
        <WeatherMessage temp={ temp } location={ location } isLoading={ isLoading }/>
				<ErrorModal errorMessage={errorMessage} onClose={ this.handleErrorClose }/>
      </div>
    );
  }
}

export default Weather;
