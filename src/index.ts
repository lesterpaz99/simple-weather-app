import './main.scss';

const input: HTMLInputElement | null = document.querySelector('input#city');
const cityBtn: HTMLButtonElement | null = document.querySelector('#city-btn');

const cardsContainer = document.querySelector('#weather__cities');

const API_KEY: string = '555a64a2fa2c8e1ed345b68072066080';

/** In this function, validate the status of the response and if the city exists */
const fetchData = async (city: string, key: string) => {
	const response: Response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
	);
	return response.json();
};

const createCityCard = async (
	city: string,
	key: string
): Promise<HTMLDivElement> => {
	const data: any = await fetchData(city, key);
	console.log(data);

	const card: HTMLDivElement = document.createElement('div');
	const cityTitle: HTMLHeadingElement = document.createElement('h2');
	const temp: HTMLParagraphElement = document.createElement('p');
	const icon: HTMLImageElement = document.createElement('img');
	const description: HTMLParagraphElement = document.createElement('p');

	cityTitle.innerText = data.name;

	/** Temp default in Kelvin */
	temp.innerText = `${(data.main.temp - 273.15).toFixed(2)}`; // apply object destructuring

	const weatherInfo = data.weather[0];
	const iconUrl: string = 'http://openweathermap.org/img/wn/';
	icon.src = `${iconUrl}${weatherInfo.icon}.png`;
	console.log(`${iconUrl}${weatherInfo.icon}.png`);

	description.innerText = weatherInfo.description;

	card.append(cityTitle, temp, icon, description);
	return card;
};

/** Render the new node to the DOM */
const renderCard = (card: HTMLDivElement) => {
	if (cardsContainer) {
		cardsContainer.append(card);
	}
};

cityBtn?.addEventListener('click', async (e) => {
	e.preventDefault();
	const city: string | undefined = input?.value;
	if (city) {
		const london = createCityCard(city, API_KEY);
		renderCard(await london);
	}
});
