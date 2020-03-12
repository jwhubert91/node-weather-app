const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/9d73a57cdab3aaaab9d7101fa64aa6a7/${latitude},${longitude}?units=us`;

	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback('Unable to connect to DarkSky forecast service.', undefined)
		} else if (body.error) {
			callback('There was an error fetching that weather forecast data.', undefined);
		} else {
			callback(undefined, 
				`It is currently ${body.currently.temperature} degrees Fahrenheit. ${body.daily.data[0].summary} The current wind speed is ${body.currently.windSpeed} mph and there is a ${body.currently.precipProbability}% chance of rain.`
			);
		}
	})
}

module.exports = forecast;