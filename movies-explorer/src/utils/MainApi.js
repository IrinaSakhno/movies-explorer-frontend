import { BASE_URL } from "../constants/urls";

class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ status: res.status, message: res.message });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(this._getResponseData)
      .then((data) => {
        return data;
      });
  }

  editUserInfo({ name, email }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  addMovie(movieInfo) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        ...movieInfo,
      }),
    }).then((res) => this._getResponseData(res));
  }

  removeMovie(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  register(name, email, password) {
    const data = { name, email, password };
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => this._getResponseData(res));
  }

  login(email, password) {
    const data = { email, password };
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
      mode: "cors",
    }).then((res) => this._getResponseData(res));
  }

  setToken() {
    this._headers["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;
  }
}

const main = new MainApi({
  baseUrl: BASE_URL,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default main;
