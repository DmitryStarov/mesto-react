import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
  return (
    <div className="page">
    <Header />

    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}/>

    <Footer />

    <PopupWithForm
      name={'edit-user'}
      title={'Редактировать профиль'}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      buttonText={'Сохранить'}
    >   <label className="popup__field">
            <input type="text" name="name" id="name-input" placeholder="Имя пользователя" className="popup__input popup__input_type_name"
            minLength="2" maxLength="40" autoComplete="off" required/>
            <span className="popup__error-message name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" name="about" id="about-input" placeholder="О себе" className="popup__input popup__input_type_about"
          minLength="2" maxLength="200" autoComplete="off" required/>
          <span className="popup__error-message popup__error-message_visible about-input-error"></span>
        </label>
    </PopupWithForm>

    <PopupWithForm
      name='add-image'
      title='Новое место'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      buttonText={'Создать'}>
        <label className="popup__field">
          <input type="text" name="name" id="image-input" placeholder="Название" className="popup__input popup__input_type_image-name"
          minLength="2" maxLength="30" autoComplete="off" required/>
          <span className="popup__error-message popup__error-message_visible image-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link"
          required />
          <span className="popup__error-message popup__error-message_visible link-input-error"></span>
        </label>
    </PopupWithForm>

    <PopupWithForm
      name={'edit-avatar'}
      title={'Обновить аватар'}
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      buttonText={'Сохранить'}>
        <label className="popup__field">
          <input type="url" name="link" id="avatar-link-input" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar"
          required />
          <span className="popup__error-message popup__error-message_visible avatar-link-input-error"></span>
        </label>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={closeAllPopups} />

</div>
  );
}

export default App;
