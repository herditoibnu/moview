import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Header,
  Menu,
  Image,
  Modal,
  Button,
  Container
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

  render() {
    return (
      <Grid.Row style={{marginTop: "10px"}}>
        <Container>
        </Container>
        <Container>
          <MovieItems/>
        </Container>
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