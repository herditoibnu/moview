import _ from 'lodash';
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
  FETCH_STARS_SUCCESS
} from '../const/actions.jsx';
import Immutable from 'immutable';

let movies = Immutable.List([]);
let genres = Immutable.List([]);
let filter = Immutable.Map({
  genre: null,
  stars: null,
  year: null
})
let stars = Immutable.List([]);
let directors = Immutable.List([]);

let init = Immutable.Map({
  movies: movies,
  genres: genres,
  directors: directors,
  stars: stars,
  showModal: null,
  filter: filter
});

export default function(data=init, action) {
  switch(action.type) {
    case SHOW_MODAL:
      let movie = data.get('movies').toJS().slice().find(mov => mov.id === action.payload);
      return data.set('showModal', movie);
    case CLOSE_MODAL:
      return data.set('showModal', null);
    case SET_ACTIVE_GENRE:
      return data.set('activeGenre', action.payload);
    case FETCH_MOVIES_SUCCESS:
      return data.set('movies', Immutable.List(action.payload));
    case FETCH_GENRES_SUCCESS:
      return data.set('genres', Immutable.List(action.payload));
    case FETCH_MOVIES_BY_GENRE_SUCCESS:
      return data.set('movies', Immutable.List(action.payload));
    case FETCH_DIRECTORS_SUCCESS:
      return data.set('directors', Immutable.List(action.payload));
    case FETCH_STARS_SUCCESS:
      return data.set('stars', Immutable.List(action.payload));
    case SET_FILTER_MOVIES:
      if (action.payload.isReplace) {
        console.log("Filter: ");
        console.log(action.payload.filter);
        return data.set('filter', Immutable.Map(action.payload.filter));
      } else {
        const filter_temp = action.payload.filter;
        const filter_old = data.get('filter').toJS();
        const filter = {
          genre: filter_temp.genre ? filter_temp.genre : filter_old.genre,
          stars: filter_temp.stars ? fitler_temp.stars : filter_old.stars,
          year: filter_temp.year ? fitler_temp.year : filter_old.year
        };
        console.log(filter);
        return data.set('filter', Immutable.Map(filter));
      }
    case ADD_REVIEW:
      let movies = data.get('movies').toJS();
      movies = movies.map(movie => {
        if (movie.id === action.payload.idMovie) {
          movie.reviews.unshift({
            id: action.payload.id,
            rating: action.payload.rating,
            comment: action.payload.comment
          })
        }
        return movie;
      });
      return data.set('movies', Immutable.List(movies));
    default:
      return data;
  }
}