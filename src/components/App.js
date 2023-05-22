import React from "react";
import "../App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardLike(currentCard, isLiked) {
    api
      .changeLikeCardStatus(currentCard._id, isLiked)
      .then((newCard) => {
        setCards(
          cards.map((card) => (card._id === currentCard._id ? newCard : card))
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleCardDelete(currentCard) {
    api.deleteCard(currentCard._id).then(() => {
      setCards(cards.filter((card) => card._id !== currentCard._id));
    });
  }

  function handleUpdateProfile(data) {
    api
    .patchProfile(data)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(error => console.log(`Ошибка: ${error}`))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateProfile={handleUpdateProfile}
        />

        <PopupWithForm
          name="add-image"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}
        >
          <label className="popup__field">
            <input
              type="text"
              name="name"
              id="image-input"
              placeholder="Название"
              className="popup__input popup__input_type_image-name"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              required
            />
            <span className="popup__error-message popup__error-message_visible image-input-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              name="link"
              id="link-input"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_type_image-link"
              required
            />
            <span className="popup__error-message popup__error-message_visible link-input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name={"edit-avatar"}
          title={"Обновить аватар"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
        >
          <label className="popup__field">
            <input
              type="url"
              name="link"
              id="avatar-link-input"
              placeholder="Ссылка на аватар"
              className="popup__input popup__input_type_avatar"
              required
            />
            <span className="popup__error-message popup__error-message_visible avatar-link-input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
