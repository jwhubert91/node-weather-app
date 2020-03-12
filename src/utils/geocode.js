const request = require('request');

const geocode = (location, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiandodWJlcnQ5MSIsImEiOiJjazdoeXN1Z2kwZnN4M2ZwOThjd2VqYzZ4In0.OB6_cyooSbRE2ziaR9I4ew&limit=1`;

	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback('Unable to connect to location services.', undefined)
		} else if (body.features.length === 0) {
			callback('There was an error fetching that location data.', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			});
		}
	})
};

module.exports = geocode;