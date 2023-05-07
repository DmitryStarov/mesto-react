import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'; 

function App() {
  return (
    <body className="page">
    <Header />
    <Main />
    <Footer />
    <div className="popup popup_type_edit-user">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
          <form name="form-user-edit" className="popup__form">
            <fieldset className="popup__fieldset">
              <label className="popup__field">
                <input type="text" name="name" id="name-input" placeholder="Имя пользователя" className="popup__input popup__input_type_name" minlength="2" maxlength="40" autocomplete="off" required/>
                <span className="popup__error-message name-input-error"></span>
              </label>
              <label className="popup__field">
                <input type="text" name="about" id="about-input" placeholder="О себе" className="popup__input popup__input_type_about" minlength="2" maxlength="200" autocomplete="off" required/>
                <span className="popup__error-message popup__error-message_visible about-input-error"></span>
              </label>
            <button type="submit" className="popup__button-save">Сохранить</button>
        </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_add-image">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <h2 className="popup__title">Новое место</h2>
        <form name="form-add-image" className="popup__form">
          <fieldset className="popup__fieldset">
            <label className="popup__field">
              <input type="text" name="name" id="image-input" placeholder="Название" className="popup__input popup__input_type_image-name" minlength="2" maxlength="30" autocomplete="off" required/>
              <span className="popup__error-message popup__error-message_visible image-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_image-link" required />
              <span className="popup__error-message popup__error-message_visible link-input-error"></span>
            </label>
            <button type="submit" className="popup__button-save">Создать</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_view-image">
      <div className="popup__container-image">
        <button type="button" className="popup__button-close"></button>
          <img src="#" alt="" className="popup__image" />
          <h2 className="popup__image-description"></h2>
      </div>
    </div>
    <div className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="form-edit-avatar" className="popup__form">
          <fieldset className="popup__fieldset">
              <label className="popup__field">
              <input type="url" name="link" id="avatar-link-input" placeholder="Ссылка на аватар" className="popup__input popup__input_type_avatar" required />
              <span className="popup__error-message popup__error-message_visible avatar-link-input-error"></span>
            </label>
            <button type="submit" className="popup__button-save">Сохранить</button>
          </fieldset>
        </form>
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
