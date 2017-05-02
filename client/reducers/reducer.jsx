import _ from 'lodash';
import {
  ADD_RESERV,
  EDIT_RESERV,
  DELETE_RESERV,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_ACTIVE_GENRE
} from '../const/actions.jsx';
import Immutable from 'immutable';

let movies = Immutable.List([{
  id: 1,
  name: "One Two",
  img: "client/assets/mov1.jpg",
  year: 2015,
  stars: [],
  genres: [],
  reviews: [1],
  desc: ""
}, {
  id: 2,
  name: "Leap!",
  img: "client/assets/mov2.jpg",
  year: 2016,
  stars: [1, 2],
  genres: [1, 2, 3, 4],
  reviews: [2, 3],
  desc: "An orphan girl dreams of becoming a ballerina and flees her rural Brittany for Paris, where she passes for someone else and accedes to the position of pupil at the Grand Opera house."
}]);

let genres = Immutable.List([{
  id: 1,
  name: "Animation"
}, {
  id: 2,
  name: "Adventure"
}, {
  id: 3,
  name: "Comedy"
}, {
  id: 4,
  name: "Family"
}]);

let stars = Immutable.List([{
  id: 1,
  name: "Elle Fanning"
}, {
  id: 2,
  name: "Carly Rae Jepsen"
}]);

let reviews = Immutable.List([{
  id: 1,
  rating: 4,
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
  id: 2,
  rating: 4,
  comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
}, {
  id: 3,
  rating: 5,
  comment: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
}]);

let init = Immutable.Map({
  showModal: null,
  movies: movies,
  stars: stars,
  genres: genres,
  reviews: reviews,
  activeGenre: null
});

export default function(data=init, action) {
  switch(action.type) {
    case ADD_RESERV: 
      return [
        ...movies,
        action.payload
      ];
    case EDIT_RESERV:
      return movies.map(reserv => {
        if (reserv.id === action.payload.id) {
          
        }
      });
    case SHOW_MODAL:
      let movie_temp = data.get('movies').toJS().slice().find(mov => mov.id === action.payload)

      let movie = {
        id: movie_temp.id,
        name: movie_temp.name,
        img: movie_temp.img,
        year: movie_temp.year,
        stars: movie_temp.stars,
        genres: movie_temp.genres,
        desc: movie_temp.desc,
        reviews: movie_temp.reviews
      }

      movie.stars = movie.stars.map(star => {
        return data.get('stars').toJS().slice().find(stars_ => {
          return stars_.id === star;
        });
      });

      movie.genres = movie.genres.map(genre => {
        return data.get('genres').toJS().slice().find(genre_ => {
          return genre_.id === genre;
        });
      });

      movie.reviews = movie.reviews.map(review => {
        return data.get('reviews').toJS().slice().find(review_ => {
          return review_.id === review;
        });
      });


      return data.set('showModal', movie);
    case CLOSE_MODAL:
      return data.set('showModal', null);
    case SET_ACTIVE_GENRE:
      console.log("active genre = " + action.payload)
      return data.set('activeGenre', action.payload)
    default:
      return data;
  }
}