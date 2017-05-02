import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Image,
} from 'semantic-ui-react';
import Immutable from 'immutable';
import MovieModal from './movie-modal.jsx';
import { showModal } from '../actions/action.jsx';


class MovieItems extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(id) {
    console.log("clicked!");
    this.props.showModal(id);
  }

  renderItems() {
    console.log("MovieItems : activeGenre: " + this.props.activeGenre);
    return this.props.movies.map(movie => {
      return (
        <Grid.Column key={movie.id} onClick={this.handleClick.bind(this, movie.id)}>
          <Image width={500} src={movie.img}/>
          {movie.name}
        </Grid.Column>
      );
    });
  }

  render() {
    return (
        <div>
          <div>
            <MovieModal/>
          </div>
          <Grid columns={4}>
            {this.renderItems()}
          </Grid>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies'),
    activeGenre: state.reducer.get('activeGenre')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: id => dispatch(showModal(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItems);