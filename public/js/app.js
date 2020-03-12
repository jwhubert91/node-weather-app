const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
	const location = search.value;
	console.log(location);
	messageOne.textContent = 'Loading...';
	messageTwo.innerHTML = '';

	if (location.length < 1) {
		messageOne.textContent = 'Search requires a location. Please try again.';
		messageTwo.innerHTML = '';
	} else {

		fetch(`/weather?address=${location}`).then((response) => {
			response.json().then((data) => {
				messageTwo.innerHTML = '';
				if (data.error) {
					messageOne.textContent = data.error;
				} else {
					messageOne.textContent = data.location;
					messageTwo.textContent = data.forecast;
				}
			})
		})
		
	}

	e.preventDefault();
});