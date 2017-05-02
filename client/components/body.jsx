import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Header,
  Menu,
  Image,
  Modal,
  Button
} from 'semantic-ui-react';
import Immutable from 'immutable';
import MovieModal from './movie-modal.jsx';
import MovieItems from './movie-items.jsx';

import { showModal } from '../actions/action.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(id) {
    console.log("clicked!");
    this.props.showModal(id);
  }

  renderItems() {
    return this.props.movies.map(movie => {
      return (
        <Grid.Column key={movie.id} onClick={this.handleClick.bind(this, movie.id)}>
          <Image width={500} src={movie.img}/>
          {movie.name}
        </Grid.Column>
      );
    })
  }

  render() {
    return (
      <Grid.Row>
        <MovieItems/>
      </Grid.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.reducer.get('movies')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: id => dispatch(showModal(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
connect(mapStateToProps, mapDispatchToProps)(MovieItems);