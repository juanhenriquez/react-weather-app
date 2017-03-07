import axios from 'axios';

class OpenWeatherMap {
  constructor(location) {
    this.location = location;
    this.url = "http://api.openweathermap.org/data/2.5/weather?&appid=6231695ffccbb9f81498e370814ce5c6&units=metric";
  }
  getTemp() {
    var requestUrl = this.parseUrl();
    return axios.get(requestUrl)
			.then(response => {
				if (response.data.cod &&  response.data.message) {
					throw new Error(response.data.message);
				} else {
					return response.data.main.temp;
				}
			});
  }
  parseUrl() {
    let encodedLocation = encodeURIComponent(this.location);
    let requestUrl = `${this.url}&q=${encodedLocation}`;
    return requestUrl;
  }
}

export default OpenWeatherMap;
