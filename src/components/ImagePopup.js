export default function ImagePopup({card, onClose}) {
    return (
      <div className={`popup popup_type_view-image ${card && 'popup_opened'}`}>
        <div className="popup__container-image">
          <button type="button" className="popup__button-close" onClick={onClose}></button>
            <img src={card ? card.link : '#'} alt={card ? card.name : ''} className="popup__image" />
            <h2 className="popup__image-description">{card ? card.name : ''}</h2>
        </div>
      </div>
    )
}
