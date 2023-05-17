import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwner = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((owner) => owner._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = isLiked
    ? "cards__button-like cards__button-like_action"
    : "cards__button-like";

  function handleCardClick() {
    onCardClick(card);
  }

  const handleCardLike = () => {
    onCardLike(card, isLiked);
  };

  return (
    <li className="cards__item">
      <img
        className="cards__image"
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
      />
      {isOwner && <button type="button" className="cards__button-remove" />}
      <div className="cards__description">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
          />
          <span className="cards__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
