const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/9d73a57cdab3aaaab9d7101fa64aa6a7/${latitude},${longitude}?units=si`;

	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback('Unable to connect to DarkSky forecast service.', undefined)
		} else if (body.error) {
			callback('There was an error fetching that weather forecast data.', undefined);
		} else {
			callback(undefined, 
				`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees. There is a ${body.currently.precipProbability}% chance of rain.`
			);
		}
	})
}

module.exports = forecast;