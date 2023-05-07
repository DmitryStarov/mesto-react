function PopupWithForm({title, name}) {
    return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <h2 className="popup__title">{title}</h2>
          <form name="form-user-edit" className="popup__form">
            <fieldset className="popup__fieldset">
             {children}
            <button type="submit" className="popup__button-save">Сохранить</button>
        </fieldset>
        </form>
      </div>
    </div>
    )
}

export default PopupWithForm