import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {
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
    onUpdateAvatar(inputValues)
  }
  return (
    <PopupWithForm
      name={"edit-avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <label className="popup__field">
        <input
          type="url"
          name="link"
          id="avatar-link-input"
          placeholder="Ссылка на аватар"
          className="popup__input popup__input_type_avatar"
          onChange={handleChange}
          required
        />
        <span className="popup__error-message popup__error-message_visible avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
