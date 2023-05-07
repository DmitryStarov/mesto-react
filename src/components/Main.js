function Main() {
    
    function handleEditAvatarClick() {
        const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
        popupEditAvatar.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        const popupEditProfile = document.querySelector('.popup_type_edit-user');
        popupEditProfile.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const popupAddImage = document.querySelector('.popup_type_add-image');
        popupAddImage.classList.add('popup_opened');
    }
    return (
    
    <main className="content">
      <section className="profile">
          <div className="profile__image-container" onClick={handleEditAvatarClick}>
            <img alt="аватар" className="profile__image" />
            <div className="profile__edit-image"></div>
          </div>
          <div className="profile__content">
            <div className="profile__wrapper">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__button-edit" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__about"></p>
          </div>
          <button type="button" className="profile__button-add" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="photo-grid">
          <ul className="cards">
          </ul>
        </section>
      </main>
 
    )
}

export default Main