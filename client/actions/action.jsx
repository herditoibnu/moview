import fetch from 'isomorphic-fetch';

import {
  ADD_RESERV,
  EDIT_RESERV,
  DELETE_RESERV,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_ACTIVE_GENRE,
  FETCH_MOVIES_SUCCESS,
  FETCH_GENRES_SUCCESS,
  FETCH_MOVIES_BY_GENRE_SUCCESS,
  SET_FILTER_MOVIES,
  ADD_REVIEW,
  FETCH_DIRECTORS_SUCCESS,
  FETCH_STARS_SUCCESS,
  FORUM_ADDRESS,
  FETCH_USERS_SUCCESS,
  LOGIN,
  REGISTER,
  LOGOUT
} from '../const/actions.jsx';

export function showModal(id) {
  return {
    type: SHOW_MODAL,
    payload: id
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function setActiveGenre(id) {
  return {
    type: SET_ACTIVE_GENRE,
    payload: id
  }
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  };
}

export function addReview(idMovie, id, rating, comment, iduser, namauser) {
  return {
    type: ADD_REVIEW,
    payload: {
      idMovie: idMovie,
      id: id,
      rating: rating,
      comment: comment,
      iduser: iduser,
      namauser: namauser
    }
  }
}

export function fetchGenresSuccess(genres) {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: genres
  }
}

export function fetchMoviesByGenreSuccess(movies) {
  return {
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    payload: movies
  }
}

export function fetchDirectorsSuccess(directors) {
  return {
    type: FETCH_DIRECTORS_SUCCESS,
    payload: directors
  }
}

export function fetchStarsSuccess(stars) {
  return {
    type: FETCH_STARS_SUCCESS,
    payload: stars
  }
}

export function setFilterMovies(filter, isReplace) {
  return {
    type: SET_FILTER_MOVIES,
    payload: {
      filter: filter,
      isReplace: isReplace
    }
  }
}

export function login(email, password) {
  return {
    type: LOGIN,
    payload: {
      email: email,
      password: password
    }
  };
}

export function register(nama, email, password) {
  return {
    type: REGISTER,
    payload: {
      name: name,
      email: email,
      password: password
    }
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export function fetchMovies() {
  return (dispatch) => {
    return fetch('http://localhost:8000/movies', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(response => {
        return dispatch(fetchMoviesSuccess(response));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function fetchGenres() {
  return (dispatch) => {
    return fetch('http://localhost:8000/genres', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(response => {
        return dispatch(fetchGenresSuccess(response));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function fetchStars() {
  return (dispatch) => {
    return fetch('http://localhost:8000/stars', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(response => {
        return dispatch(fetchStarsSuccess(response));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function fetchDirectors() {
  return (dispatch) => {
    return fetch('http://localhost:8000/directors', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => response.json())
      .then(response => {
        return dispatch(fetchDirectorsSuccess(response));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function insertReview(idMovie, rating, comment, iduser, namauser) {
  return (dispatch) => {
    return fetch('http://localhost:8000/movies/' + idMovie + '/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
        iduser: iduser,
        namauser: namauser
      })
    })
    .then(response => response.json())
    .then(response => {
      return dispatch(addReview(idMovie, response.id, response.rating, response.comment, response.id_user, namauser));
    })
    .catch(error => {
      throw(error);
    })
  }
}

export function fetchMoviesByGenre(genre) {
  console.log(genre)
  return (dispatch) => {
    return fetch('http://localhost:8000/movies/genres/' + genre + '', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      return dispatch(fetchMoviesByGenreSuccess(response));
    })
    .catch(error => {
      throw(error);
    })
  }
}

export function fetchUsers() {
  return (dispatch) => {
    return fetch(FORUM_ADDRESS+'forums/users', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log("USERS : ")
      console.log(response)
      return dispatch(fetchUsersSuccess(response));
    })
    .catch(error => {
      throw(error);
    })
  }
}