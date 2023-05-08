function ImagePopup() {
    return (
      <div className="popup popup_type_view-image">
        <div className="popup__container-image">
          <button type="button" className="popup__button-close"></button>
            <img src="#" alt="" className="popup__image" />
            <h2 className="popup__image-description"></h2>
        </div>
      </div>
    )
}
