/** In this function, validate the status of the response and if the city exists */
const fetchData = async (city: string, key: string) => {
	const response: Response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
	);
	return response.json();
};

export default fetchData;
