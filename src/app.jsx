import React from 'react';
import Navbar from './components/Navbar';

export default class App extends React.Component {

  render() {
    return (
      <div className="bg-container">
        <Navbar />
				<div className="weather-container">
        	{ this.props.children }
				</div>
      </div>
    )
  }
}
