import React from 'react';
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

const WeatherMessage = ({ isLoading, location, temp }) => {
  if (isLoading) {
    return <WeatherMessageLoading/>
  } else if (location && temp) {
    return <WeatherMessageText location={ location } temp={ temp }/>
  }

  return (
    <Card style={{ margin: "20px auto", padding: "10px 20px" }}>
      <p>Search a location in the text field above.</p>
    </Card>
  );
}

const WeatherMessageLoading = (props) => {
  return (
    <Card style={{ margin: "20px auto", padding: "10px 20px" }}>
      <CircularProgress className="circular-progress-loader" size={30} thickness={7} />
      Fetching Weather
    </Card>
  );
}

const WeatherMessageText = ({ temp, location }) => {
  return (
    <Card style={{ margin: "20px auto", padding: "10px 20px" }}>
      <p>It's it { temp }º in { location }  </p>
    </Card>
  );
}

WeatherMessageText.propTypes = {
  temp: React.PropTypes.number,
  location: React.PropTypes.string
};

WeatherMessage.propTypes = {
  temp: React.PropTypes.number,
  location: React.PropTypes.string,
  isLoading: React.PropTypes.bool
}

export default WeatherMessage;
