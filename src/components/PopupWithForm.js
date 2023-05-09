export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  buttonText,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form">
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
