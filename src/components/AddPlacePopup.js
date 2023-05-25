import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [inputValues, setInputValues] = React.useState({});

  function handleChange(evt) {
    const { value, name } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(inputValues);
  }
  return (
    <PopupWithForm
      name="add-image"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
        <span className="popup__error-message popup__error-message_visible link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
