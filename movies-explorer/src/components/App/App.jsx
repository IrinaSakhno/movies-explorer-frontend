import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Popup from "../Popup/Popup";
import "./App.css";
import main from "../../utils/MainApi";
import movies from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { MOVIE_IMAGE_URL } from "../../constants/urls";

function App() {
  const navigate = useNavigate();
  const path = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  // Popup in profile editing:
  const [isPopupSuccessful, setIsPopupSuccessful] = useState({
    isOpen: false,
    isSuccessful: false,
  });

  // If logged in, header changes:
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User:
  const [currentUser, setCurrentUser] = useState({});

  // Movies:
  const [moviesList, setMoviesList] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isConnectionError, setIsConnectionError] = useState(false);

  // Login:

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      main
        .getUserInfo()
        .then((data) => {
          setCurrentUser((userData) => ({
            ...userData,
            name: data.name,
            email: data.email,
            _id: data._id,
          }));
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          logOut();
        });
    } else {
      logOut();
    }
  }, []);

  const handleLogin = (email, password) => {
    return main
      .login(email, password)
      .then(({ token }) => {
        localStorage.setItem("jwt", token);
        main.setToken(token);
        return main.getUserInfo(token);
      })
      .then(({ name, email }) => {
        setCurrentUser((prev) => ({
          ...prev,
          name: name,
          email: email,
        }));
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
        return true;
      });
  };

  // Registration:
  const handleRegister = (name, email, password) => {
    return main
      .register(name, email, password)
      .then(() => handleLogin(email, password));
  };

  // Sign out:
  const logOut = () => {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  // Changes in user's data:
  const handleUserUpdate = (userData) => {
    setIsLoading(true);
    main
      .editUserInfo(userData)
      .then((data) => {
        setCurrentUser(data);
        setIsPopupSuccessful({
          isOpen: true,
          isSuccessful: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setIsPopupSuccessful({
          isOpen: true,
          isSuccessful: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Popup in profile edit section:

  const closePopup = () => {
    setIsPopupSuccessful({
      isOpen: false,
      isSuccessful: false,
    });
  };

  // MOVIES:

  const loadAllMovies = () => {
    setIsLoading(true);
    setIsConnectionError(false);
    movies
      .getMovies()
      .then((data) => {
        setMoviesList(data);
      })
      .catch((err) => {
        console.log(err);
        setIsConnectionError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const loadSavedMovies = () => {
      setIsLoading(true);
      setIsConnectionError(false);
      main
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
          setIsConnectionError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (isLoggedIn) {
      loadSavedMovies();
    }
  }, [isLoggedIn]);

  // Like a movie:
  const handleSaveMovie = (movie) => {
    const movieObject = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: MOVIE_IMAGE_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: MOVIE_IMAGE_URL + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameRU,
    };
    setIsConnectionError(false);
    main
      .addMovie(movieObject)
      .then((userMovie) => {
        setSavedMovies([...savedMovies, userMovie.movie]);
      })
      .catch((err) => {
        console.log(err);
        setIsConnectionError(true);
      });
  };

  // Remove a movie:
  const handleDeleteMovie = (movie) => {
    const movieToBeRemoved = savedMovies.find((m) => {
      if (path.pathname === "/movies") {
        return movie.id.toString() === m.movieId;
      } else {
        return movie.movieId === m.movieId;
      }
    });
    setIsConnectionError(false);
    main
      .removeMovie(movieToBeRemoved._id.toString())
      .then((removedMovie) => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== removedMovie._id)
        );
      })
      .catch((err) => {
        console.log(err);
        setIsConnectionError(true);
      });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />

          <Route path="/signin" element={<Login onLogin={handleLogin} />} />

          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />

          <Route
            path="/profile"
            element={
              <Profile
                logOut={logOut}
                handleUserUpdate={handleUserUpdate}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/movies"
            element={
              <Movies
                savedMovies={savedMovies}
                moviesList={moviesList}
                isLoading={isLoading}
                onDelete={handleDeleteMovie}
                onSave={handleSaveMovie}
                isConnectionError={isConnectionError}
                loadAllMovies={loadAllMovies}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                savedMoviesList={savedMovies}
                isLoading={isLoading}
                onDelete={handleDeleteMovie}
                onSave={handleSaveMovie}
                isConnectionError={isConnectionError}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Popup
          onClose={closePopup}
          isSuccessful={isPopupSuccessful.isSuccessful}
          isOpen={isPopupSuccessful.isOpen}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
