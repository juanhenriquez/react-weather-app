import React from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

const About = props => {
  return (
  	<Card containerStyle={{ maxWidth: '500px', width: '100%' }}>
			<CardTitle title="About"/>
			<CardText>
				<p className="mb-15">
					This is a weather application build on React. I have built this async
					for <a href="https://www.udemy.com/the-complete-react-web-app-developer-course">The Complete React Web Developer Course.</a>
				</p>
				<p className="mb-5">Here are some of the tools I used:</p>
				<List style={{ padding: '0' }}>
					<ListItem
							leftAvatar={<Avatar src="https://facebook.github.io/react/img/logo.svg" />}
							primaryText={ <a target="a_blank" href="https://facebook.github.io/react/">React</a>}
							secondaryText={ <p>JavaScript framework used for this app.</p> }/>

					<ListItem
						leftAvatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/1/15/OpenWeatherMap_logo.png" />}
						primaryText={<a target="a_blank" href="https://openweathermap.org/">Open Weather Map</a>}
						secondaryTextLines={2}
						secondaryText={ <p>I used the Open Weather Map API to search for weather data by city name</p> }/>

					<ListItem
						leftAvatar={<Avatar src="http://cdn.designbeep.com/wp-content/uploads/2014/11/material-ui.jpg" />}
						primaryText={ <a target="a_blank" href="http://www.material-ui.com/#/">Material UI</a> }
						secondaryText={ <p>A library of React components with Material Design Style</p> }/>
				</List>
			</CardText>
			<CardActions>
				<FlatButton label="See in Github" />
			</CardActions>
		</Card>
  );
}

export default About;
