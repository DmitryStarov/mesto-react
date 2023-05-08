import { settings } from "./constants";
class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }
//проверка статуса ответа от сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
     return Promise.reject(res.status);
  }
  //получение данных пользователя

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers : this._headers})
      .then (this._checkResponse);
  }

  //редактирование данных пользователя
  patchProfile(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers : this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      })
    })
    .then (this._checkResponse);
  }

  //редактирование автара
  patchAvatar(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers : this._headers,
      body: JSON.stringify({
        avatar: avatar.link,
      })
    })
    .then (this._checkResponse);
  }

  //получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers : this._headers})
      .then (this._checkResponse);
  }

  //добавление карточки
  postCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers : this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
    .then (this._checkResponse);
  }

  //удаление карточки
  deleteCard(cardId) {
  console.log(cardId)
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers : this._headers
  })
  .then (this._checkResponse);
  }

  //ставит лайк
  putLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers : this._headers
    })
    .then (this._checkResponse);
  }

  //удаляет лайк
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers : this._headers
    })
    .then (this._checkResponse);
  }

}
export const api = new Api(settings);
