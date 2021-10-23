import './main.scss';
import API_KEY from '../config';
import createCityCard from './ts/createCard';
import renderCard from './ts/render';

const input: HTMLInputElement | null = document.querySelector('input#city');
const cityBtn: HTMLButtonElement | null = document.querySelector('#city-btn');

cityBtn?.addEventListener('click', async (e) => {
	e.preventDefault();
	const city: string | undefined = input?.value;
	if (city) {
		const london = createCityCard(city, API_KEY);
		renderCard(await london);
	}
});
