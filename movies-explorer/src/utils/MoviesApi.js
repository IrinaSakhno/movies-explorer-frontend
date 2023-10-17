import { MOVIE_URL } from "../constants/urls";

class MoviesApi {
  constructor(options) {
    this.movieUrl = options.movieUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} ${res.message}`);
  }

  getMovies() {
    return fetch(`${this.movieUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }
}

const movies = new MoviesApi({
  movieUrl: MOVIE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

export default movies;
