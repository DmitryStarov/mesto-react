import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
  }

function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
}
  return (
    <body className="page">
    <Header />

    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}/>

    <Footer />

    <PopupWithForm
      name={'edit-user'}
      title={'Редактировать профиль'}
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      buttonText={'Сохранить'}
    >
        <label className="popup__field">
            <input type="text" name="name" id="name-input" placeholder="Имя пользователя" className="popup__input popup__input_type_name" minlength="2" maxlength="40" autocomplete="off" required/>
            <span className="popup__error-message name-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="text" name="about" id="about-input" placeholder="О себе" className="popup__input popup__input_type_about" minlength="2" maxlength="200" autocomplete="off" required/>
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
          <input type="text" name="name" id="image-input" placeholder="Название" className="popup__input popup__input_type_image-name" minlength="2" maxlength="30" autocomplete="off" required/>
          <span className="popup__error-message popup__error-message_visible image-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
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
          <input type="url" name="link" id="avatar-link-input" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar" required />
          <span className="popup__error-message popup__error-message_visible avatar-link-input-error"></span>
        </label>
    </PopupWithForm>

    <div className="popup popup_type_view-image">
      <div className="popup__container-image">
        <button type="button" className="popup__button-close"></button>
          <img src="#" alt="" className="popup__image" />
          <h2 className="popup__image-description"></h2>
      </div>
    </div>

    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form name="delete-image" className="popup__form">
          <button type="submit" className="popup__button-save">Да</button>
         </form>
      </div>
    </div>

  <template id="card-template">
    <li className="cards__item">
      <img alt="" className="cards__image" />
      <button type="button" className="cards__button-remove"></button>
      <div className="cards__description">
        <h2 className="cards__title"></h2>
        <div className="cards__like-container">
          <button type="button" className="cards__button-like"></button>
          <span className="cards__like-count">0</span>
        </div>
      </div>
    </li>
  </template>
</body>
  );
}

export default App;
