import fetchData from './fetchData';

const createCityCard = async (
	city: string,
	key: string
): Promise<HTMLDivElement> => {
	const data: any = await fetchData(city, key);
	if (data.cod === '404') {
		const message: HTMLParagraphElement = document.createElement('p');
		message.innerText = data.message;
		return message;
	}

	const card: HTMLDivElement = document.createElement('div');
	const cityTitle: HTMLHeadingElement = document.createElement('h2');
	const countryName: HTMLSpanElement = document.createElement('span');
	const temperature: HTMLParagraphElement = document.createElement('p');
	const iconElement: HTMLImageElement = document.createElement('img');
	const descriptionWeather: HTMLParagraphElement = document.createElement('p');

	const { name } = data;
	const { country } = data.sys;
	const { temp } = data.main;
	const { description, icon } = data.weather[0];

	cityTitle.innerText = name;
	countryName.innerText = country;

	/** Temp default in Kelvin */
	temperature.innerText = `${Math.round(temp - 273.15)}°C`; // apply object destructuring

	const iconUrl: string = 'http://openweathermap.org/img/wn/';
	iconElement.src = `${iconUrl}${icon}.png`;
	console.log(`${iconUrl}${icon}.png`);

	descriptionWeather.innerText = description;

	card.append(
		cityTitle,
		countryName,
		temperature,
		iconElement,
		descriptionWeather
	);
	return card;
};

export default createCityCard;
