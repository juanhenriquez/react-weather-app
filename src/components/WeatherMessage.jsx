import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class WeatherMessage extends React.Component {
  render () {
    return (
      <div>
        <Card style={{
          margin: "20px auto",
          padding: "5px 20px"
        }}>
          <p>Sorry, we could not find the city you were looking for.</p>
        </Card>
      </div>
    );
  }
}

export default WeatherMessage;