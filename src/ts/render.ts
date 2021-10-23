const cardsContainer = document.querySelector('#weather__cities');

/** Render the new node to the DOM */
const renderCard = (card: HTMLDivElement) => {
	if (cardsContainer) {
		cardsContainer.append(card);
	}
};

export default renderCard;
