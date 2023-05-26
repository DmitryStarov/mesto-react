import React from "react";
import "../App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [deletedCard, setDeletedCard] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [buttonTextAddPopup, setButtonTextAddPopup] = React.useState("Создать");
  const [buttonTextEditPopup, setButtonTextEditPopup] =
    React.useState("Сохранить");
  const [buttonTextConfirmPopup, setButtonTextConfirmPopup] =
    React.useState("Да");
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
    setDeletedCard(null);
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
    setDeletedCard(currentCard);
  }

  function handleConfirmCardDelete() {
    setButtonTextConfirmPopup("Сохранение...");
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        setCards(cards.filter((card) => card._id !== deletedCard._id));
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        setButtonTextConfirmPopup("Да");
      });
  }

  function handleUpdateProfile(data) {
    setButtonTextEditPopup("Сохранение...");
    api
      .patchProfile(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        setButtonTextEditPopup("Сохранить");
      });
  }

  function handleUpdateAvatar(data) {
    setButtonTextEditPopup("Сохранение...");
    api
      .patchAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        setButtonTextEditPopup("Сохранить");
      });
  }

  function handleAddPlace(data) {
    setButtonTextAddPopup("Сохранение...");
    api
      .postCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => {
        setButtonTextAddPopup("Создать");
      });
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
          buttonText={buttonTextEditPopup}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          buttonText={buttonTextAddPopup}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          buttonText={buttonTextEditPopup}
        />
        <ConfirmPopup
          isOpen={deletedCard}
          onClose={closeAllPopups}
          onConfirm={handleConfirmCardDelete}
          buttonText={buttonTextConfirmPopup}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
