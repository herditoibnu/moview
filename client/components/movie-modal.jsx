import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Modal,
  Button,
  Image
} from 'semantic-ui-react';
import _ from 'lodash';

import { closeModal } from '../actions/action.jsx';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    this.props.closeModal();
  }

  renderStars() {
    return this.props.movie.stars.map(star => {
      return star.name + " ";
    });
  }

  renderGenres() {
    return this.props.movie.genres.map(genre => {
      return genre.name + " ";
    });
  }

  averateRating() {
    var arrayOfRating = _.map(this.props.movie.reviews, 'rating');
    return _.mean(arrayOfRating);
  }

  render() {
    if (this.props.movie) {
      return (
        <Modal dimmer='blurring' open={true} onClose={this.handleClose.bind(this)}>
          <Modal.Header>{this.props.movie.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.movie.img}/>
            <Modal.Description>
              <Header>({this.props.movie.year})</Header>
              <Header as='h3'>{this.averateRating()}</Header>
              <p>Stars: {this.renderStars()} </p>
              <p>Genre: {this.renderGenres()} </p>
              <p>{this.props.movie.desc}</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.handleClose.bind(this)}>
              Nope
            </Button>
            <Button 
              positive icon='checkmark' labelPosition='right' 
              content="Yep, that's me" onClick={this.handleClose.bind(this)} />
          </Modal.Actions>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.reducer.get('showModal')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);