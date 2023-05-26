import React from "react";
export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  buttonText,
}) {
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) onClose();
  }
  React.useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          <fieldset className="popup__fieldset">
            {children}
            <button type="submit" className="popup__button-save">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
