import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Grid,
  Segment,
  Label,
  Modal,
  Button,
  Image
} from 'semantic-ui-react';
import _ from 'lodash';
import { closeModal } from '../actions/action.jsx';
import UserReviews from './UserReviews.jsx';
import styles from '../assets/styles.css';

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    this.props.closeModal();
  }

  renderStars() {
    return this.props.movie.stars.map(star => {
      return star.name + ", ";
    });
  }

  renderGenres() {
    return this.props.movie.genres.map(genre => {
      return genre.name + ", ";
    });
  }

  averageRating() {
    if (!this.props.movie.reviews) {
      return "Not rated.";
    }

    var arrayOfRating = _.map(this.props.movie.reviews, 'rating');
    return _.mean(arrayOfRating).toFixed(1);
  }

  render() {
    if (this.props.movie) {
      return (
        <Modal closeIcon dimmer='blurring' open={true} onClose={this.handleClose.bind(this)}>
          <Modal.Header>{this.props.movie.name} ({this.props.movie.year})</Modal.Header>
          <Modal.Content image>
            <Image wrapped className="image-modal" src={"/" + this.props.movie.img}/>
            <Modal.Description>
              <Segment raised>
                <Label as='h3' style={{backgroundColor: "#CDDC39"}} ribbon><h2 className="label-segment">Movie Info</h2></Label>
                <span></span>
                <p style={{margin: "10px", textAlign: "justify"}}>{this.props.movie.desc}</p>
                <Grid style={{paddingTop: "10px", paddingBottom: "10px"}}>
                  <Grid.Row className="grid-row-modal">
                    <Grid.Column width={2}>
                      Genre
                    </Grid.Column>
                    <Grid.Column width={13}>
                      {this.renderGenres()}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className="grid-row-modal">
                    <Grid.Column width={2}>
                      Stars
                    </Grid.Column>
                    <Grid.Column width={13}>
                      {this.renderStars()}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row className="grid-row-modal">
                    <Grid.Column width={2}>
                      Rating
                    </Grid.Column>
                    <Grid.Column width={13}>
                      {this.averageRating()}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment >
              <UserReviews reviews={this.props.movie.reviews} movieId={this.props.movie.id}/>
              <Segment raised>
                <Label as='h3' style={{backgroundColor: "#CDDC39"}} ribbon><h2 className="label-segment">Trailer</h2></Label>
                <center style={{marginTop: "10px"}}>
                  <iframe width="560" height="315" src={this.props.movie.trailer} frameborder="0" allowfullscreen></iframe>
                </center>
              </Segment>
            </Modal.Description>
          </Modal.Content>
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
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);