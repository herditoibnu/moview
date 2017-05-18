import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Image,
} from 'semantic-ui-react';
import Immutable from 'immutable';
import _ from 'lodash';
import MovieModal from './movie-modal.jsx';
import { 
  showModal,
  fetchMovies,
  fetchMoviesByGenre,
  setFilterMovies
} from '../actions/action.jsx';

class MovieItems extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  // DISINI ADA FUNGSI FILTER
  filterMovies(filter) {
    if (!filter) {
      return this.props.movies;
    }

    let filteredMovie = [];

    const movies = this.props.movies;

    for (let i = 0; i < movies.length; i++) {
      // filter year
      if (filter.year) {
        if (filter.year !== movies[i].year) {
          console.log("DROP YEAR " + movies[i].name);
          continue;
        }
      }

      // filter category
      if (filter.category) {
        if (filter.category.toLowerCase() !== movies[i].category.toLowerCase()) {
          console.log("DROP CATEGORY " + movies[i].name);
          continue;
        }
      }

      // filter title
      if (filter.title) {
        if (!_.includes(movies[i].name.toLowerCase(), filter.title.toLowerCase())) {
          console.log("DROP TITLE FROM " + movies[i].name);
          continue; 
        }
      }

      // filter star name
      if (typeof filter.star === 'string') {
        let index = _.find(movies[i].stars, {
          name: filter.star
        })

        if (index === undefined) {
          console.log("DROP STAR NAME " + movies[i].name);
          continue;
        }
      }
        
      // filter stars id
      if (typeof filter.star === 'number') {
        let index = _.find(movies[i].stars, {
          'id': filter.star
        });

        if (index === undefined) {
          console.log("DROP STAR ID " + movies[i].name);
          continue;
        }
      }

      // filter genre
      if (filter.genre) {
        console.log(filter.genre);
        let index = _.find(movies[i].genres, {
          'name': filter.genre
        });

        if (index === undefined) {
          console.log("DROP GENRES " + movies[i].name);
          continue;
        }
      }

      // filter rating
      if (filter.rating) {
        // count rating
        let arrayOfRating = _.map(movies[i].reviews, 'rating');
        let rating = _.mean(arrayOfRating).toFixed(1);
        if (!(rating - filter.rating <= 1.01 && rating - filter.rating >= 0.01)) {
          console.log("DROP RATING " + movies[i].name);
          continue;
        }
      }

      // filter mood
      if (filter.mood) {
        if (filter.mood.toLowerCase() !== movies[i].mood.toLowerCase()) {
          console.log("DROP MOOD " + movies[i].name);
          continue;
        }
      }

      // filter director
      if (filter.director) {
        // let index = _.find(movies[i].director, {
        //   'name': filter.director
        // });
        if (movies[i].director.name !== filter.director) {
          console.log("DROP DIRECTOR " + movies[i].name);
          continue;
        }
      }

      // filter yearFrom
      if (filter.yearFrom) {
        if (movies[i].year < filter.yearFrom) {
          console.log("DROP YEAR FROM " + movies[i].name);
        }
      }

      // filter yearTo
      if (filter.yearTo) {
        if (movies[i].year > filter.yearTo) {
          console.log("DROP YEAR TO " + movies[i].name);
        }
      }

      filteredMovie.push(movies[i]);
    }

    return filteredMovie;
  }


  handleClick(id) {
    console.log("clicked!");
    this.props.showModal(id);
  }

  renderItems() {
    console.log(this.props.filter);
    return this.filterMovies(this.props.filter).map(movie => {
      return (
        <Grid.Column key={movie.id} onClick={this.handleClick.bind(this, movie.id)}>
          <Image width={500} src={"/" + movie.img} className="image-movie"/>
        </Grid.Column>
      );
    });
  }

  render() {
    return (
        <div style={{width: "100%"}}>
          <div>
            <MovieModal/>
          </div>
          <Grid columns={5}>
            {this.renderItems()}
          </Grid>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies').toJS(),
    filter: state.reducer.get('filter').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: id => dispatch(showModal(id)),
    fetchMovies: () => dispatch(fetchMovies()),
    fetchMoviesByGenre: (genre) => dispatch(fetchMoviesByGenre(genre)),
    setFilterMovies: (filter) => dispatch(setFilterMovies(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItems);