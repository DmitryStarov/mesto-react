import React from 'react';
import { api } from '../utils/Api'
import Cards from './Cards';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

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
            <Cards card={card} onCardClick={onCardClick} key={card._id}/>
          ))}
        </ul>
      </section>
      </main>

    )
}


