import React from "react";
import { api } from "../utils/Api"
function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar)
        setCards(cards);
      })
       .catch(error => console.log(`Ошибка: ${error}`));

  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
          <img alt="аватар" className="profile__image" src={userAvatar}/>
          <div className="profile__edit-image"></div>
        </div>
        <div className="profile__content">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
          <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
      </section>
      <section className="photo-grid">
        <ul className="cards">
          {cards.map(card => (
              <li className="cards__item">
              <img className="cards__image" alt={card.name} src={card.link}  />
              <button type="button" className="cards__button-remove"></button>
              <div className="cards__description">
                <h2 className="cards__title">{card.name}</h2>
                <div className="cards__like-container">
                  <button type="button" className="cards__button-like"></button>
                  <span className="cards__like-count">{card.likes.length}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      </main>

    )
}

export default Main
