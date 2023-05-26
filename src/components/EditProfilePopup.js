import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateProfile, buttonText }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [inputValues, setInputValues] = React.useState({});

  function handleChange(evt) {
    const { value, name } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  React.useEffect(() => {
    setInputValues(currentUser);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateProfile(inputValues);
  }
  return (
    <PopupWithForm
      name={"edit-user"}
      title={"Редактировать профиль"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      {" "}
      <label className="popup__field">
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя пользователя"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          defaultValue={inputValues.name || currentUser.name}
          onChange={handleChange}
          required
        />
        <span className="popup__error-message name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          type="text"
          name="about"
          id="about-input"
          placeholder="О себе"
          className="popup__input popup__input_type_about"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          defaultValue={inputValues.about || currentUser.about}
          onChange={handleChange}
          required
        />
        <span className="popup__error-message popup__error-message_visible about-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
