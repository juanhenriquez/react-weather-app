import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class WeatherForm extends React.Component {
  render () {
    return (
      <div>
        <h1 className="weather-title">Get Weather</h1>
        <Card style={{
          margin: "0 auto",
          padding: "5px 20px"
        }}>
          <form className="weather-form">
            <input type="text" placeholder="Enter city name"/>
          </form>
        </Card>
        <RaisedButton label="Get Weather" secondary={true} style={{
          marginTop: "10px",
          width: "100%"
        }}/>
      </div>
    );
  }
}

export default WeatherForm;