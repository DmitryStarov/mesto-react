export default function Cards({card, onCardClick}) {

  function handleCardClick() {
    onCardClick(card);
  }

  return(
    <li className="cards__item">
    <img className="cards__image" alt={card.name} src={card.link} onClick={handleCardClick} />
    <button type="button" className="cards__button-remove"></button>
    <div className="cards__description">
      <h2 className="cards__title">{card.name}</h2>
      <div className="cards__like-container">
        <button type="button" className="cards__button-like"></button>
        <span className="cards__like-count">{card.likes.length}</span>
      </div>
    </div>
  </li>
  )
}
